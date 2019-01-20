using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DomainModel.Entity
{
    [Table("Cars")]
    public class Car
    {
        [Key]
        public int CarId { get; set; }
        public int ClientId { get; set; }
        public string Brand { get; set; }
        public string Model { get; set; }
        public DateTime Year { get; set; }
        public string EngineType { get; set; }
        public decimal Capacity { get; set; }
        public decimal Power { get; set; }
        public string CarIdentificator { get; set; }
        public virtual Client Client { get; set; }
        public Car() { }
    }
}
