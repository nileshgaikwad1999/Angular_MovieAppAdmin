using API.DataModel;
using API.Iservices;
using API.Model;
using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;

namespace API.Services
{
    public class ActorsService : IActorsService
    {
        private AppDbContext _context;
        public ActorsService(AppDbContext context)
        {
            _context = context;
        }
        public async Task Delete(ActorsModel model)
        {
            var d = _context.actors.FirstOrDefault(e => e.Id == model.Id);
            _context.actors.Remove(d);
            await _context.SaveChangesAsync();
        }

        public async Task<List<ActorsModel>> Actors()
        {

           

            var result = await _context.actors.ToListAsync();
            List<ActorsModel> actorsModels = new List<ActorsModel>();
            foreach (var item in result)
            {
                actorsModels.Add(new ActorsModel()
                {
                    DateOfBirth = item.DateOfBirth,
                    Id = item.Id,
                    Name = item.Name,
                    ProfilePicture = item.ProfilePicture,
                    genresId = item.genresId
                });
            }
            return actorsModels;
        }

        public async Task<ActorsModel> Actor(int id)
        {
            var result = await _context.actors.FirstOrDefaultAsync(e => e.Id == id);
            ActorsModel actors = new ActorsModel()
            {
                Id = result.Id,
                DateOfBirth = result.DateOfBirth,
                Name = result.Name,
                ProfilePicture = result.ProfilePicture,
                genresId = result.genresId
            };

            return actors;

        }

        public async Task Insert(ActorsModel result)
        {
            Actors actors = new Actors()
            {
                Id = result.Id,
                DateOfBirth = result.DateOfBirth,
                Name = result.Name,
                ProfilePicture = result.ProfilePicture,
              genresId=result.genresId  
            };
            _context.actors.Add(actors);
            await _context.SaveChangesAsync();
        }

        public async Task Update(ActorsModel model)
        {
            var result = await _context.actors.FirstOrDefaultAsync(e => e.Id == model.Id);
            result.Name = model.Name;
            result.ProfilePicture = model.ProfilePicture;
            result.genresId= model.genresId;
            result.DateOfBirth = model.DateOfBirth;
            await _context.SaveChangesAsync();

        }
    }
}
