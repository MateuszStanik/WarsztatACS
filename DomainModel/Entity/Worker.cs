using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DomainModel.Entity
{
    [Table("Workers")]
    public class Worker
    {
        [Key]
        public int WorkerId { get; set; }
        public string Name { get; set; }
        public string SureName { get; set; }
        public string Pesel { get; set; }
        public string City { get; set; }
        public string Street { get; set; }
        public string HouseNumber { get; set; }
        public string PostalCode { get; set; }
        public string PhoneNumber { get; set; }
        public Worker() { }
    }
}
