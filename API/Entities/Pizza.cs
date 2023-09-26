using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace API.Entities
{
    public class Pizza
    {
        public int Id { get; set; }
        public string Size { get; set; } = default!;
        public List<Topping>? Toppings { get; set; } 


        public Order Order { get; set; } = null!;
        public int OrderId { get; set; }


        public decimal getPadCost()
        {
            long cost;
            switch(Size.ToLower()){
                case "small":
                    cost = 8;
                    break;
                case "medium":
                    cost = 10;
                    break;
                case "large":
                    cost = 12;
                    break;
                default:
                    cost = 0;
                    break;           
            };   
            return cost;

        }

    }
}