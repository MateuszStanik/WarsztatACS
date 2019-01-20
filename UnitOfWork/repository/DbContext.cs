using AnularCore.Model.Entity;
using DomainModel.Entity;
using Microsoft.EntityFrameworkCore;


namespace AnularCore.repository
{
  public class DBContext: DbContext
  {
    public DBContext()
    {
    }

    public DBContext(DbContextOptions<DBContext> options)
        : base(options)
    {
    }

    public virtual DbSet<User> Users { get; set; }
    public virtual DbSet<Advert> Adverts { get; set; }
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
