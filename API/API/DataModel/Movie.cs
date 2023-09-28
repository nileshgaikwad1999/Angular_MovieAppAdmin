using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace API.DataModel
{
    public class Movie
    {
        [Key]
        public int Id { get; set; }

        public string name { get; set; }
        public string relaseDate { get; set; }

        public decimal price { get; set; }

        [ForeignKey("actors")]
        public int actorId { get; set; }

        public Actors actors{ get; set; }
    }
}
