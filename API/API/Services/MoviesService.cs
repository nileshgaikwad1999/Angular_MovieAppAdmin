using API.DataModel;
using API.Iservices;
using API.Model;
using Microsoft.EntityFrameworkCore;

namespace API.Services
{
    public class MoviesService : IMovieService
    {
        private AppDbContext _context;
        public MoviesService(AppDbContext context)
        {
            _context = context;
        }
        public async Task Delete(MovieModel model)
        {
            var result = await _context.movies.FirstOrDefaultAsync(e => e.Id == model.Id);
            _context.movies.Remove(result);
            _context.SaveChanges();
        }

        public async Task Insert(MovieModel model)
        {
            Movie movie = new Movie()
            {
                Id = model.Id,
                actorId = model.actorId,
                name = model.name,
                price = model.price,
                relaseDate = model.relaseDate,

            };
            _context.movies.Add(movie);
            await _context.SaveChangesAsync();
        }

        public async Task<MovieModel> movie(int id)
        {
            var result = await _context.movies.FirstOrDefaultAsync(e => e.Id == id);

            return new MovieModel
            {
                relaseDate = result.relaseDate,
                actorId = result.actorId,
                name = result.name,
                price = result.price,
                Id= result.Id
            };

        }

        public async Task<List<MovieModel>> movies()
        {
            List<MovieModel> movies = new List<MovieModel>();
        var results=await _context.movies.ToListAsync();
            foreach (var result in results)
            {
                movies.Add(new MovieModel
                {
                    relaseDate = result.relaseDate,
                    actorId = result.actorId,
                    name = result.name,
                    price = result.price,
                    Id = result.Id
                });
            }
            return movies;
        }

        public async Task Update(MovieModel model)
        {
            var result = await _context.movies.FirstOrDefaultAsync(e => e.Id == model.Id);

            result.price = model.price;
            result.name = model.name;
            result.relaseDate= model.relaseDate;
            result.actorId = model.actorId;
           await _context.SaveChangesAsync();
        }
    }
}
