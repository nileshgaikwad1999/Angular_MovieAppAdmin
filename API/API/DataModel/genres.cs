using System.ComponentModel.DataAnnotations;

namespace API.DataModel
{
    public class genres
    {
        [Key]
        public int genresId { get; set; }

        public string Name { get; set; }
    }
}
