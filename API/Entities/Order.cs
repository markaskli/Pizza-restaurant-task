using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace API.Entities
{
    public class Order
    {
        public int Id { get; set; }
        public decimal TotalCost { get; set; }


        public Pizza? Pizza { get; set;}
        public int PizzaId { get; set; }
        
    }
}