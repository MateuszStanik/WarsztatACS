﻿// <auto-generated />
using System;
using AnularCore.repository;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;

namespace Warsztat.Migrations
{
    [DbContext(typeof(DBContext))]
    partial class DBContextModelSnapshot : ModelSnapshot
    {
        protected override void BuildModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("ProductVersion", "2.2.1-servicing-10028")
                .HasAnnotation("Relational:MaxIdentifierLength", 128)
                .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

            modelBuilder.Entity("DomainModel.Entity.Car", b =>
                {
                    b.Property<int>("CarId")
                        .ValueGeneratedOnAdd()
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<string>("Brand");

                    b.Property<decimal>("Capacity");

                    b.Property<string>("CarIdentificator");

                    b.Property<int>("ClientId");

                    b.Property<string>("EngineType");

                    b.Property<string>("Model");

                    b.Property<decimal>("Power");

                    b.Property<DateTime>("Year");

                    b.HasKey("CarId");

                    b.HasIndex("ClientId");

                    b.ToTable("Cars");
                });

            modelBuilder.Entity("DomainModel.Entity.Client", b =>
                {
                    b.Property<int>("ClinetId")
                        .ValueGeneratedOnAdd()
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<string>("City");

                    b.Property<string>("Discriminator")
                        .IsRequired();

                    b.Property<string>("Email");

                    b.Property<string>("HouseNumber");

                    b.Property<string>("PhoneNumber");

                    b.Property<string>("PostalCode");

                    b.Property<string>("Street");

                    b.HasKey("ClinetId");

                    b.ToTable("Clients");

                    b.HasDiscriminator<string>("Discriminator").HasValue("Client");
                });

            modelBuilder.Entity("DomainModel.Entity.Order", b =>
                {
                    b.Property<int>("OrderId")
                        .ValueGeneratedOnAdd()
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<int>("CarId");

                    b.Property<DateTime>("DateOfEnd");

                    b.Property<DateTime>("DateOfStart");

                    b.Property<string>("Opis");

                    b.Property<string>("Title");

                    b.Property<int>("WorkerId");

                    b.HasKey("OrderId");

                    b.HasIndex("CarId");

                    b.HasIndex("WorkerId");

                    b.ToTable("Order");
                });

            modelBuilder.Entity("DomainModel.Entity.Part", b =>
                {
                    b.Property<int>("PartId")
                        .ValueGeneratedOnAdd()
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<string>("Code");

                    b.Property<string>("Name");

                    b.Property<int>("OrderId");

                    b.Property<decimal>("Price");

                    b.HasKey("PartId");

                    b.HasIndex("OrderId");

                    b.ToTable("Orders");
                });

            modelBuilder.Entity("DomainModel.Entity.User", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<string>("Email");

                    b.Property<string>("Name");

                    b.HasKey("Id");

                    b.ToTable("Users");
                });

            modelBuilder.Entity("DomainModel.Entity.Worker", b =>
                {
                    b.Property<int>("WorkerId")
                        .ValueGeneratedOnAdd()
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<string>("City");

                    b.Property<string>("HouseNumber");

                    b.Property<string>("Name");

                    b.Property<string>("Pesel");

                    b.Property<string>("PhoneNumber");

                    b.Property<string>("PostalCode");

                    b.Property<string>("Street");

                    b.Property<string>("SureName");

                    b.HasKey("WorkerId");

                    b.ToTable("Workers");
                });

            modelBuilder.Entity("DomainModel.Entity.Company", b =>
                {
                    b.HasBaseType("DomainModel.Entity.Client");

                    b.Property<string>("NIP");

                    b.Property<string>("Name");

                    b.Property<string>("REGON");

                    b.ToTable("Companies");

                    b.HasDiscriminator().HasValue("Company");
                });

            modelBuilder.Entity("DomainModel.Entity.Individual", b =>
                {
                    b.HasBaseType("DomainModel.Entity.Client");

                    b.Property<string>("Name")
                        .HasColumnName("Individual_Name");

                    b.Property<string>("PESEL");

                    b.Property<string>("Surename");

                    b.ToTable("Individuals");

                    b.HasDiscriminator().HasValue("Individual");
                });

            modelBuilder.Entity("DomainModel.Entity.Car", b =>
                {
                    b.HasOne("DomainModel.Entity.Client", "Client")
                        .WithMany()
                        .HasForeignKey("ClientId")
                        .OnDelete(DeleteBehavior.Cascade);
                });

            modelBuilder.Entity("DomainModel.Entity.Order", b =>
                {
                    b.HasOne("DomainModel.Entity.Car", "Car")
                        .WithMany()
                        .HasForeignKey("CarId")
                        .OnDelete(DeleteBehavior.Cascade);

                    b.HasOne("DomainModel.Entity.Worker", "Worker")
                        .WithMany()
                        .HasForeignKey("WorkerId")
                        .OnDelete(DeleteBehavior.Cascade);
                });

            modelBuilder.Entity("DomainModel.Entity.Part", b =>
                {
                    b.HasOne("DomainModel.Entity.Order", "Order")
                        .WithMany()
                        .HasForeignKey("OrderId")
                        .OnDelete(DeleteBehavior.Cascade);
                });
#pragma warning restore 612, 618
        }
    }
}
