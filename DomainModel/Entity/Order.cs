using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DomainModel.Entity
{
    [Table("Order")]
    public class Order
    {
        [Key]
        public int OrderId { get; set; }
        public int CarId { get; set; }
        public int WorkerId { get; set; }
        public string Title { get; set; }
        public string Opis { get; set; }
        public DateTime DateOfStart { get; set; }
        public DateTime DateOfEnd { get; set; }
        public virtual Car Car { get; set; }
        public virtual Worker Worker { get; set; }
    }
}
