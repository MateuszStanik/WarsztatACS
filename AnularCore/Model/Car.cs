using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Warsztat.Model
{
  public class Car
  {
    public int ClientId { get; set; }
    public string Brand { get; set; }
    public string Model { get; set; }
    public DateTime Year { get; set; }
    public string EngineType { get; set; }
    public decimal Capacity { get; set; }
    public decimal Power { get; set; }
    public string CarIdentificator { get; set; }
  }
}
