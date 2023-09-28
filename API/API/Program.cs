using API.DataModel;
using API.Iservices;
using API.Services;
using Microsoft.EntityFrameworkCore;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();
builder.Services.AddCors(option =>
{
    option.AddDefaultPolicy(options =>
    {
        options.WithOrigins("http://localhost:4200").AllowAnyMethod().AllowAnyHeader();
    });
});
builder.Services.AddDbContext<AppDbContext>(o => o.UseSqlServer(builder.Configuration.GetConnectionString("con")));
builder.Services.AddScoped<IgenresService,genresService>();

builder.Services.AddScoped<IActorsService, ActorsService>();
builder.Services.AddScoped<IMovieService, MoviesService>();
builder.Services.AddScoped<IMovieTheaterService, MovieTheatherService>();
builder.Services.AddScoped<IMovieTheaterDeatilsService, MovieTheaterDeatilsService>();
builder.Services.AddScoped<IMovieDeatilsService, TranasctionMovieDetailsService>();
var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}
app.UseCors();
app.UseHttpsRedirection();

app.UseAuthorization();

app.MapControllers();

app.Run();
