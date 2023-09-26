using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace API.Data.DTO
{
    public class ToppingDTO
    {
        public string title { get; set; } = default!;
        public int cost { get; set; }
    }
}