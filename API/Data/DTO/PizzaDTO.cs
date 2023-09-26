using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace API.Data.DTO
{
    public class PizzaDTO
    {
        public string size { get; set; } = default!;
        public List<ToppingDTO> toppings { get; set; } = new();
    }
}