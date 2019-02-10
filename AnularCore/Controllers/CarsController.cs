using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AnularCore.repository;
using Microsoft.AspNetCore.Mvc;
using Warsztat.Model;

namespace Warsztat.Controllers
{
  [Route("api/car")]
  public class CarsController : Controller
  {
    private readonly IEFDbContext _DbContext;

    public CarsController(IEFDbContext contex)
    {
      _DbContext = contex;
    }

    [HttpPost, Route("AddCarForClient")]
    public IActionResult AddIndividualCustomer([FromBody]Car Car)
    {
      //TODO add try catch
      DomainModel.Entity.Car newCar = new DomainModel.Entity.Car()
      {
        Brand = Car.Brand,
        Capacity = Car.Capacity,
        CarIdentificator = Car.CarIdentificator,
        ClientId = Car.ClientId,
        EngineType = Car.EngineType,
        Model = Car.Model,
        Power = Car.Power,
        Year = Car.Year
      };

      _DbContext.Cars.Add(newCar);
      _DbContext.SaveChanges();

      return Ok();
    }

    [HttpGet, Route("GetCarsForClient")]
    public IActionResult GetCarsForClient(string id)
    {
      int clientId = Int32.Parse(id);
      var cars =_DbContext.Cars.Where(x =>x.ClientId == clientId).ToList();

      return Ok(cars);
    }

    [HttpGet, Route("GetCarDetailsById")]
    public IActionResult GetCarDetailsById(string id)
    {
      int carId = Int32.Parse(id);
      var car =_DbContext.Cars.Where(x =>x.CarId == carId).Single();

      return Ok(car);
    }

    [HttpDelete, Route("DeleteCar")]
    public IActionResult DeleteCar(string id)
    {
      int carId = Int32.Parse(id);
      var car = _DbContext.Cars.Single(x => x.CarId == carId);
      _DbContext.Cars.Remove(car);
      _DbContext.SaveChanges();
      return Ok();
    }
  }
}
