using API.Model;

namespace API.Iservices
{
    public interface IMovieDeatilsService
    {
        List<MovieDetails> GetMovieDetails();
        Task Inset(MovieTheatherModel theatherModel);
        Task<MovieTheatherModel> GetTheaterDetails(int id);

        Task Update(MovieTheatherModel theatherModel);
    }
}
