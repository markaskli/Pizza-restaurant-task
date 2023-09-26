using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace API.Entities
{
    public class Topping
    {
        public int Id { get; set; }
        public string Title { get; set; } = default!;
        public decimal Price { get; set; } = 1;
        
        public Pizza Pizza { get; set; } = null!;
        public int PizzaId { get; set; }
    }
}