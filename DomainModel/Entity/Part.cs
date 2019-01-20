using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DomainModel.Entity
{
    [Table("Orders")]
    public class Part
    {
        [Key]
        public int PartId { get; set; }
        public string Code { get; set; }
        public int OrderId { get; set; }
        public string Name { get; set; }
        public decimal Price { get; set; }
        public virtual Order Order { get; set; }
    }
}
