using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DomainModel.Entity
{
    [Table("Companies")]
    public class Company : Client
    {
        public string NIP { get; set; }
        public string REGON { get; set; }
        public string Name { get; set; }
    }
}
