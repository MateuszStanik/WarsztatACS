using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DomainModel.Entity
{
    [Table("Individuals")]
    public class Individual : Client
    {
       
        public string Name { get; set; }
        public string Surename { get; set;}
        public string PESEL { get; set; }
    }
}
