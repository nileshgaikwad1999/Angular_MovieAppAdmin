using Microsoft.EntityFrameworkCore;
using System.Reflection.Emit;
using System.Reflection.Metadata;

namespace API.DataModel
{
    public class AppDbContext:DbContext
    {
        public AppDbContext(DbContextOptions<AppDbContext> options):base(options) { }
       
        public DbSet<genres> genres { get; set; }

        public DbSet<Actors> actors { get; set; }
        public DbSet<Movie> movies { get; set; }

        public DbSet<MovieTheather> moviesTheather { get; set; }

        public DbSet<MovieTeatherDetails> movieTeatherDetails { get; set; }
        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            var g = new genres() { genresId = 1, Name = "drama" };
            modelBuilder.Entity<genres>().HasData(g);
                
        }

    }
}
