using API.Model;

namespace API.Iservices
{
    public interface IMovieService
    {
        Task<List<MovieModel>> movies();

        Task<MovieModel> movie(int id);

        Task Insert(MovieModel model);

        Task Update(MovieModel model);

        Task Delete(MovieModel model);
    }
}
