using DomainModel.Entity;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace AnularCore.repository
{
  public interface IEFDbContext : IDisposable
  {
    DbSet<User> Users { get; set; }
    DbSet<Car> Cars { get; set; }
    DbSet<Client> Clients { get; set; }
    DbSet<Company> Companies { get; set; }
    DbSet<Individual> Individuals { get; set; }
    DbSet<Worker> Workers { get; set; }
    DbSet<Order> Orders { get; set; }
    DbSet<Part> Parts { get; set; }
    int SaveChanges();
  }
}
