namespace API.Model
{
    public class MovieTheatherModel
    {
        public int Id { get; set; }

        public string Name { get; set; }

        public string location { get; set; }

        public List<MovieTheaterDetailsModel> movieTheaterDetails { get; set; }
    }
}
