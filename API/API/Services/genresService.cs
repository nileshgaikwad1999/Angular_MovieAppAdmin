using API.DataModel;
using API.Iservices;
using API.Model;
using Microsoft.EntityFrameworkCore;

namespace API.Services
{
    public class genresService : IgenresService
    {
        private AppDbContext _context;
        public genresService(AppDbContext context) { _context = context; }
        public async Task<List<genersModel>> geners()
        {
            var result = await _context.genres.ToListAsync();
            List<genersModel> geners = new List<genersModel>();
            foreach (var item in result)
            {
                geners.Add(new genersModel() { Id = item.genresId, Name = item.Name });
            }
            return geners;


        }

        public async Task Insert(genersModel model)
        {
            genres genres = new();
            genres.Name = model.Name;
            _context.genres.Add(genres);
            await _context.SaveChangesAsync();
        }

        public async Task Update(genersModel model)
        {

            genres data = await _context.genres.FirstOrDefaultAsync(e => e.genresId == model.Id);
            data.Name = model.Name;
            _context.Update(data);
            await _context.SaveChangesAsync();
        }

        public async Task Delete(genersModel model)
        {
            genres data = await _context.genres.FirstOrDefaultAsync(e => e.genresId == model.Id);
            _context.genres.Remove(data);
            await _context.SaveChangesAsync();

        }

        public async Task<genersModel> geners(int id)
        {
            genres data = await _context.genres.FirstOrDefaultAsync(e => e.genresId == id);
            genersModel model = new genersModel();
            model.Id = data.genresId;
            model.Name = data.Name;
            return model;
        }
    }
}
