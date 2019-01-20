using AnularCore.Model.Entity;
using DomainModel.Entity;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using UnitOfWork.Abstract;

namespace UnitOfWork.Concrete
{
    //public class EFDbContext : DbContext, IEFDbContext
    //{
    //    public EFDbContext()
    //    {
    //    }

    //    public EFDbContext(DbContextOptions<EFDbContext> options)
    //        : base(options)
    //    {
    //    }

    //    public virtual DbSet<User> Users { get; set; }
    //    public virtual DbSet<Advert> Advert { get; set; }

    //    protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
    //    {
    //        //if (!optionsBuilder.IsConfigured)
    //        //{
    //        //  optionsBuilder.UseSqlServer(ConfigurationManager.ConnectionStrings["AngularDb"].ConnectionString);
    //        //  //optionsBuilder.UseSqlServer(@"Server=(localdb)\mssqllocaldb;Database=AngularCore;Trusted_Connection=True;");
    //        //}
    //    }
    //    protected override void OnModelCreating(ModelBuilder modelBuilder)
    //    {

    //        base.OnModelCreating(modelBuilder);



    //    }
    //}
}