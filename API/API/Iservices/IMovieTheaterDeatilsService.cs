using API.Model;

namespace API.Iservices
{
    public interface IMovieTheaterDeatilsService
    {
        Task<List<MovieTheaterDetailsModel>> MovieTheaterDetails();

        Task<MovieTheaterDetailsModel> MovieTheaterDetail(int id);

        Task Insert(MovieTheaterDetailsModel model);

        Task Update(MovieTheaterDetailsModel model);

        Task Delete(MovieTheaterDetailsModel model);
        Task<List<MovieTheaterDetailsModel>> getMovieTheaterDetailsById(int id);
    }
}
