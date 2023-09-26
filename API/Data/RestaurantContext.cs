using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using API.Entities;
using Microsoft.EntityFrameworkCore;

namespace API.Data
{
    public class RestaurantContext : DbContext
    {
        public RestaurantContext(DbContextOptions<RestaurantContext> options)
            : base(options)
        {

        }

        public DbSet<Pizza> Pizzas { get; set;}
        public DbSet<Order> Orders { get; set;}

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Order>()
                .HasOne(e => e.Pizza)
                .WithOne(e => e.Order)
                .HasForeignKey<Pizza>(e => e.OrderId)
                .OnDelete(DeleteBehavior.Cascade);

        }
    }
}