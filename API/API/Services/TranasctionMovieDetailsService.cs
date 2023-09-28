using API.DataModel;
using API.Iservices;
using API.Model;
using Microsoft.EntityFrameworkCore;

namespace API.Services
{
    public class TranasctionMovieDetailsService : IMovieDeatilsService
    {

        private AppDbContext _context;
        private IMovieTheaterService _movieTheater;
        private IMovieTheaterDeatilsService _movieTheaterDeatilsService;
        public TranasctionMovieDetailsService(AppDbContext context, IMovieTheaterService movieTheater, IMovieTheaterDeatilsService movieTheaterDeatilsService)
        {
            _context = context; _movieTheater = movieTheater;
            _movieTheaterDeatilsService = movieTheaterDeatilsService;
        }
        public List<MovieDetails> GetMovieDetails()
        {
            //var data=_context.movies.Include(e=>e.actors).ThenInclude(e=>e.Genres).ToList();

            var moviesDeatils = (from mtd in _context.movieTeatherDetails
                                 join mt in _context.moviesTheather on mtd.movieTheatherId equals mt.Id
                                 join m in _context.movies on mtd.movieId equals m.Id
                                 join a in _context.actors on m.actorId equals a.Id
                                 join g in _context.genres on a.genresId equals g.genresId
                                 orderby m.name 
                                 select new MovieDetails()
                                 {
                                     Id = m.Id,
                                     MovieName = m.name,
                                     ActorName = a.Name,
                                     price  = m.price,
                                     realseDate = m.relaseDate,
                                     TheaterName = mt.Name,
                                     location = mt.location,
                                 }
                                 
                                 ).Distinct().ToList();
            return moviesDeatils;
        }

        public async Task Inset(MovieTheatherModel theatherModel)
        {
            await _movieTheater.Insert(theatherModel);

            foreach (var item in theatherModel.movieTheaterDetails)
            {
                item.movieTheatherId = theatherModel.Id;
                await _movieTheaterDeatilsService.Insert(item);
            }
        }
        public async Task<MovieTheatherModel> GetTheaterDetails(int id)
        {
            MovieTheatherModel movieTheather = new MovieTheatherModel();
            movieTheather = await _movieTheater.movieTheather(id);
            movieTheather.movieTheaterDetails = await _movieTheaterDeatilsService.getMovieTheaterDetailsById(id);
            return movieTheather;
        }

        public async Task Update(MovieTheatherModel theatherModel)
        {
            await _movieTheater.Update(theatherModel);

            foreach (var iteam in theatherModel.movieTheaterDetails)
            {
                if (iteam.Id != 0)
                {
                    await _movieTheaterDeatilsService.Update(iteam);
                }
                else
                {
                    iteam.movieTheatherId = theatherModel.Id;
                    await _movieTheaterDeatilsService.Insert(iteam);

                }
            }
        }
    }
}
