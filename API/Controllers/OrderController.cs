using System;
using System.Collections.Generic;
using System.Linq;
using System.Text.Json;
using System.Text.Json.Serialization;
using System.Threading.Tasks;
using API.Data;
using API.Data.DTO;
using API.Entities;
using API.Extensions;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace API.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class OrderController : ControllerBase
    {
        private readonly RestaurantContext _context;

        public OrderController(RestaurantContext context)
        {
            _context = context;
        }

        [HttpPost]
        public async Task<ActionResult> CreateOrder([FromBody] PizzaDTO submittedOrder)
        {
            decimal totalCost = 0;
            decimal discount = 0.1M;
            string jsonString;
            PizzaDTO pizzaDTO;



            try
            {
                jsonString = JsonSerializer.Serialize<PizzaDTO>(submittedOrder);
            }
            catch (Exception ex)
            {
                return BadRequest(new ProblemDetails { Title = $"Problem occurred while serializing the submitted information. {ex.Message}" });
            }


            try
            {
                pizzaDTO = JsonSerializer.Deserialize<PizzaDTO>(jsonString);
            }
            catch (Exception ex)
            {
                return BadRequest(new ProblemDetails { Title = $"Problem occurred while deserializing the submitted information. {ex.Message}" });
            }


            if (pizzaDTO == null) return BadRequest();
            var pizza = pizzaDTO.MapPizzaDTOToPizza();

            decimal padCost = pizza.getPadCost();
            totalCost += padCost;

            if (pizza.Toppings != null && pizza.Toppings.Count > 0)
            {
                foreach (Topping topping in pizza.Toppings)
                {
                    totalCost += topping.Price;
                }


                if (pizza.Toppings.Count > 3)
                {
                    totalCost = totalCost - totalCost * discount;
                }
            }

            var order = new Order
            {
                TotalCost = totalCost,
                Pizza = pizza
            };

            _context.Orders.Add(order);
            var result = await _context.SaveChangesAsync() > 0;
            if (result) return Ok();

            return BadRequest(new ProblemDetails { Title = "Problem occurred while saving the order" });

        }


        [HttpGet]
        public async Task<ActionResult<List<Order>>> GetAllOrders()
        {
            var list = await _context.Orders
                .Include(p => p.Pizza)
                .ThenInclude(t => t.Toppings)
                .ToListAsync();

            if (list.Count == 0) return NotFound();

            return list;

        }

        [HttpGet("totalCost")]
        public async Task<ActionResult<decimal>> GetOrderCost()
        {
            var lastOrder = await _context.Orders.LastOrDefaultAsync();
            if (lastOrder == null) return NotFound();
            return lastOrder.TotalCost;
        }
    }
}