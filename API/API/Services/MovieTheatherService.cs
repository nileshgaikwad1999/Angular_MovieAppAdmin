using API.DataModel;
using API.Iservices;
using API.Model;
using Microsoft.AspNetCore.Http;
using Microsoft.EntityFrameworkCore;
using System.Xml.Linq;

namespace API.Services
{
    public class MovieTheatherService : IMovieTheaterService
    {
        private AppDbContext _context;
        public MovieTheatherService(AppDbContext context)
        {
            _context = context;
        }
        public async Task Delete(MovieTheatherModel model)
        {
            var result = await _context.moviesTheather.FirstOrDefaultAsync(e => e.Id == model.Id);
            _context.moviesTheather.Remove(result);
            _context.SaveChanges();
        }

        public async Task Insert(MovieTheatherModel model)
        {
            MovieTheather movies = new MovieTheather()
            {
                Id = model.Id,
             location=model.location,
             Name=model.Name

            };
            _context.moviesTheather.Add(movies);
            await _context.SaveChangesAsync();
            model.Id = movies.Id;

        }

        public async Task<MovieTheatherModel> movieTheather(int id)
        {
            var result = await _context.moviesTheather.FirstOrDefaultAsync(e => e.Id == id);
            return new MovieTheatherModel()
            {

                Id = result.Id,
                location = result.location,
                Name = result.Name
            };

        }

        public async Task<List<MovieTheatherModel>> movieTheathers()
        {
            List<MovieTheatherModel> movies = new List<MovieTheatherModel>();
            var results = await _context.moviesTheather.ToListAsync();
            foreach (var result in results)
            {
                movies.Add(new MovieTheatherModel
                {
                    Id = result.Id,
                    location = result.location,
                    Name = result.Name
                });
            }
            return movies;
        }

        public async Task Update(MovieTheatherModel model)
        {
            var result = await _context.moviesTheather.FirstOrDefaultAsync(e => e.Id == model.Id);
            result.location = model.location;
            result.Name = model.Name;
            await _context.SaveChangesAsync();
        }
    }
}
