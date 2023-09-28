using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace API.DataModel
{
    public class Actors
    {
        [Key]
        public int Id { get; set; }

        public string Name { get; set; }

        public string DateOfBirth { get; set; }

        public string ProfilePicture { get; set; }

        [ForeignKey("Genres")]
        [Column("genresId")]
        public int genresId { get; set; }
        public genres Genres { get; set; }
    }
}
