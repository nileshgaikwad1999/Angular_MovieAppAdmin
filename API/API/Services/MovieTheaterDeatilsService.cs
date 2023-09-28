using API.DataModel;
using API.Iservices;
using API.Model;
using Microsoft.EntityFrameworkCore;

namespace API.Services
{
    public class MovieTheaterDeatilsService : IMovieTheaterDeatilsService
    {
        private readonly AppDbContext _context;

        public MovieTheaterDeatilsService(AppDbContext context)
        {
            _context = context;
        }

        public async Task Delete(MovieTheaterDetailsModel model)
        {
            var data = _context.movieTeatherDetails.FirstOrDefault(e => e.Id == model.Id);

            _context.movieTeatherDetails.Remove(data);
            await _context.SaveChangesAsync();
        }

        public async Task Insert(MovieTheaterDetailsModel model)
        {

            MovieTeatherDetails details = new MovieTeatherDetails()
            {
                movieId = model.movieId,
                movieTheatherId = model.movieTheatherId,
            };
            _context.movieTeatherDetails.Add(details);
            await _context.SaveChangesAsync();

        }

        public async Task<MovieTheaterDetailsModel> MovieTheaterDetail(int id)
        {
            var data = await _context.movieTeatherDetails.FirstOrDefaultAsync(e => e.Id == id);
            MovieTheaterDetailsModel details = new MovieTheaterDetailsModel()
            {
                Id = data.Id,
                movieId = data.movieId,
                movieTheatherId = data.movieTheatherId,
            };
            return details;
        }

        public async Task<List<MovieTheaterDetailsModel>> MovieTheaterDetails()
        {
            var data = await _context.movieTeatherDetails.ToListAsync();
            List<MovieTheaterDetailsModel> movieTheaterDetailsModels = new List<MovieTheaterDetailsModel>();
            foreach (var item in data) {

                movieTheaterDetailsModels.Add(new MovieTheaterDetailsModel()
                {
                    Id = item.Id,
                    movieId = item.movieId,
                    movieTheatherId = item.movieTheatherId,
                });

            }
            return movieTheaterDetailsModels;


        }
        public async Task<List<MovieTheaterDetailsModel>> getMovieTheaterDetailsById(int id)
        {
            var data=   await _context.movieTeatherDetails.Where(e => e.movieTheatherId == id).ToListAsync();
            List<MovieTheaterDetailsModel> movieTheaterDetailsModels = new List<MovieTheaterDetailsModel>();
            foreach (var item in data)
            {

                movieTheaterDetailsModels.Add(new MovieTheaterDetailsModel()
                {
                    Id = item.Id,
                    movieId = item.movieId,
                    movieTheatherId = item.movieTheatherId,
                });

            }
            return movieTheaterDetailsModels;
        }

        public async Task Update(MovieTheaterDetailsModel model)
        {
            var data = _context.movieTeatherDetails.FirstOrDefault(e => e.Id == model.Id);
            data.movieTheatherId = model.movieTheatherId;
            data.movieId = model.movieId;
           await _context.SaveChangesAsync();
        }
    }
}
