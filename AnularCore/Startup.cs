using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using AnularCore.repository;
using Autofac;
using Autofac.Extensions.DependencyInjection;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.IdentityModel.Tokens;

namespace AnularCore
{
    public class Startup
    {
        public IConfiguration Configuration { get; set; } 

        public Startup(IHostingEnvironment env)
        {
            var builder = new ConfigurationBuilder()
              .SetBasePath(env.ContentRootPath)
              .AddJsonFile("appsettings.json", optional: false, reloadOnChange: true)
              .AddEnvironmentVariables();
            Configuration = builder.Build();
            
        }
        // This method gets called by the runtime. Use this method to add services to the container.
        // For more information on how to configure your application, visit https://go.microsoft.com/fwlink/?LinkID=398940
        public IServiceProvider ConfigureServices(IServiceCollection services)
        {
           // services.AddTransient<IEFDbContext, DbContext>();
            
            services.AddDbContext<DBContext>(options =>
              options.UseSqlServer(Configuration.GetConnectionString("AngularDb")));

            services.AddScoped<IEFDbContext, DBContext>();

            services.AddAuthentication(JwtBearerDefaults.AuthenticationScheme)
                        .AddJwtBearer(options =>
                        {
                          options.TokenValidationParameters = new TokenValidationParameters
                          {
                            ValidateIssuer = true,
                            ValidateAudience = true,
                            ValidateLifetime = true,
                            ValidateIssuerSigningKey = true,

                            ValidIssuer = "http://localhost:1405/",
                            ValidAudience = "http://localhost:1405/",
                            //ValidIssuer = "http://acs.hostingasp.pl",
                            //ValidAudience = "http://acs.hostingasp.pl",
                            IssuerSigningKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes("superSecretKey@345"))
                          };
                        });
            services.AddMvc();
            var containerBuilder = new ContainerBuilder();
            containerBuilder.Populate(services);
            containerBuilder.RegisterType<DBContext>().As<IEFDbContext>();

            var container = containerBuilder.Build();
            return container.Resolve<IServiceProvider>();

      // Register your own services within Autofac

      //services.AddCors(options =>
      //{
      //  options.AddPolicy("EnableCORS", builder =>
      //  {
      //    builder.AllowAnyOrigin()
      //    .AllowAnyMethod()
      //    .AllowAnyHeader()
      //    .AllowCredentials()
      //    .Build();
      //  });
      //});
      //var connection = @"Server=(localdb)\mssqllocaldb;Database=AngularCore;Trusted_Connection=True;ConnectRetryCount=0";
      //      services.AddDbContext<DBContext>(options => options.UseSqlServer(connection));  
    }

    // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
    public void Configure(IApplicationBuilder app, IHostingEnvironment env)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }
            app.Use(async (context, next) =>
            {
                await next();
                if (context.Response.StatusCode == 404 &&
                !Path.HasExtension(context.Request.Path.Value) &&
                !context.Request.Path.Value.StartsWith("/api/"))
                {
                    context.Request.Path = "/index.html";
                    await next();
                }
            });


            app.UseAuthentication();
            //app.UseCors("EnableCORS");
            app.UseMvcWithDefaultRoute();
            app.UseDefaultFiles();
            app.UseStaticFiles();
        }
    }
}
