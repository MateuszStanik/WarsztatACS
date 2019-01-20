using AnularCore.repository;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Mvc;
using Microsoft.IdentityModel.Protocols;
using System;
using System.Collections.Generic;
using System.IdentityModel.Tokens.Jwt;
using System.IO;
using System.Linq;
using System.Net.Http.Headers;
using System.Threading.Tasks;

namespace AnularCore.Controllers
{
  [Produces("application/json")]
  [Route("api/[controller]")]
  public class OrdersController : Controller
  {
    private readonly IEFDbContext _DbContext;

    public OrdersController(IEFDbContext contex)
    {   
      _DbContext = contex;
    }

  

  }
}
