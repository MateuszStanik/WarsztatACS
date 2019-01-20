
using DomainModel.Entity;
using Microsoft.EntityFrameworkCore;
using System;
using System.Data.Entity.Validation;
using System.Linq;

namespace AnularCore.repository
{
  public class DBContext: DbContext, IEFDbContext
  {
    public DBContext()
    {
    }

    public DBContext(DbContextOptions<DBContext> options)
        : base(options)
    {
    }

    public virtual DbSet<User> Users { get; set; }
    public virtual DbSet<Car> Cars { get; set; }
    public virtual DbSet<Client> Clients { get; set; }
    public virtual DbSet<Company> Companies { get; set; }
    public virtual DbSet<Individual> Individuals { get; set; }
    public virtual DbSet<Worker> Workers { get; set; }
    public virtual DbSet<Order> Orders { get; set; }
    public virtual DbSet<Part> Parts { get; set; }

    public override int SaveChanges()
    {

      try
      {
        return base.SaveChanges();
      }
      catch (DbEntityValidationException ex)
      {
        var exMessage = ex.EntityValidationErrors.SelectMany(x => x.ValidationErrors).Aggregate(String.Empty, (current, error) => current + String.Format("{0}: {1}\n", error.PropertyName, error.ErrorMessage));
        throw new DbEntityValidationException(exMessage, ex.EntityValidationErrors);
      }

    }

    protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
    {
      //if (!optionsBuilder.IsConfigured)
      //{
      //  optionsBuilder.UseSqlServer(ConfigurationManager.ConnectionStrings["AngularDb"].ConnectionString);
      //  //optionsBuilder.UseSqlServer(@"Server=(localdb)\mssqllocaldb;Database=AngularCore;Trusted_Connection=True;");
      //}
    }
    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {

      base.OnModelCreating(modelBuilder);
     

      
    }
  }
}
