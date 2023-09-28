using API.Model;

namespace API.Iservices
{
    public interface IMovieTheaterService
    {
        Task<List<MovieTheatherModel>> movieTheathers();

        Task<MovieTheatherModel> movieTheather(int id);

        Task Insert(MovieTheatherModel model);

        Task Update(MovieTheatherModel model);

        Task Delete(MovieTheatherModel model);
    }
}
