using System.ComponentModel.DataAnnotations.Schema;

namespace API.DataModel
{
    public class MovieTeatherDetails
    {
        public int Id { get; set; }

        public MovieTheather movieTheather { get; set; }

        [ForeignKey("movieTheather")]
        public int movieTheatherId { get; set; }

        public int movieId { get; set; }
    }
}
