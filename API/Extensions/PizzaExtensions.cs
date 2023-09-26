using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using API.Data.DTO;
using API.Entities;

namespace API.Extensions
{
    public static class PizzaExtensions
    {
        public static Pizza MapPizzaDTOToPizza(this PizzaDTO pizzaDTO)
        {
            return new Pizza { 
                Size = pizzaDTO.size,
                Toppings = pizzaDTO.toppings.Select(item => new Topping {
                    Title = item.title,
                    Price = item.cost
                }).ToList()
            };
        }
    }
}