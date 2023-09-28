using API.Iservices;
using API.Model;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers
{
    [Route("api/[controller]/[action]")]
    [ApiController]
    public class MovieDetailsController : ControllerBase
    {
        private IMovieDeatilsService _movieDeatilsService;
        public MovieDetailsController(IMovieDeatilsService movieDeatilsService)
        {
            _movieDeatilsService = movieDeatilsService;
        }

        [HttpGet]
        public List<MovieDetails> Get()
        {
            return _movieDeatilsService.GetMovieDetails();
        }
    }
}
