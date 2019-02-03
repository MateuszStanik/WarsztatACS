using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AnularCore.repository;
using DomainModel.Entity;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Warsztat.Model;
using Client = Warsztat.Model.Client;

namespace Warsztat.Controllers
{
  [Route("api/client")]
  public class ClientsController : Controller
  {
    private readonly IEFDbContext _DbContext;

    public ClientsController(IEFDbContext contex)
    {
      _DbContext = contex;
    }

    [HttpGet, Route("get"), Authorize(Roles = "Manager")]
    public IEnumerable<string> Get()
    {
      var s = User.IsInRole("Manager");
      
      return new string[] { "John Doe", "Jane Doe" };
    }

    [HttpPost, Route("AddIndividualCustomer")]
    public IActionResult AddIndividualCustomer([FromBody]Client user)
    {
      try
      {
        Individual newClient = new Individual()
        {
          City = user.City,
          Email = user.Email,
          HouseNumber = user.HouseNumber,
          Name = user.Name,
          PhoneNumber = user.PhoneNumber,
          PostalCode = user.PostalCode,
          Street = user.Street,
          Surename = user.Surename
        };

        _DbContext.Clients.Add(newClient);
        _DbContext.SaveChanges();

        return Ok();
      }
      catch (Exception ex)
      {
        return BadRequest(ex.Message);
      }
      //TODO add try catch
      
    }

    [HttpPost, Route("AddCompanyCustomer")]
    public IActionResult AddCompanyCustomer([FromBody]Client user)
    {
      try
      {
        Company newClient = new Company()
        {
          City = user.City,
          Email = user.Email,
          HouseNumber = user.HouseNumber,
          Name = user.CompanyName,
          PhoneNumber = user.PhoneNumber,
          PostalCode = user.PostalCode,
          Street = user.Street,
          NIP = user.NIP,
          REGON = user.REGON
        };

        _DbContext.Clients.Add(newClient);
        _DbContext.SaveChanges();

        return Ok();
      }
      catch (Exception ex)
      {
        return BadRequest(ex.Message);
      
      }
      //TODO add try catch
    
    }

    [HttpGet, Route("GetCompanyCustomers")]
    public IActionResult GetCompanyCustomers()
    {
      try
      {
        var clients =_DbContext.Clients.ToList();
       
      return Ok(clients);
      }
      catch (Exception ex)
      {
        return BadRequest(ex.Message);

  }
}

    [HttpGet, Route("GetClient")]
    public IActionResult GetClient(string id)
    {
      int clientId = Int32.Parse(id);
      var client = _DbContext.Clients.Where(x => x.ClinetId == clientId).FirstOrDefault();

      return Ok(client);
    }
  }
}
