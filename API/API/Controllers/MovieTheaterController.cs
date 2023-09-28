using API.Iservices;
using API.Model;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers
{
    [Route("api/[controller]/[action]")]
    [ApiController]
    public class MovieTheaterController : ControllerBase
    {

        private IMovieTheaterService _movieTheaterService;
        private IMovieDeatilsService _movieDeatilsService;
        public MovieTheaterController(IMovieTheaterService movieService, IMovieDeatilsService movieDeatilsService)
        {
            _movieTheaterService = movieService;
            _movieDeatilsService = movieDeatilsService;
        }

        [HttpGet]
        public async Task<ActionResult<List<MovieTheatherModel>>> Get()
        {
            return await _movieTheaterService.movieTheathers();
        }

        [HttpGet]
        [Route("{id}")]
        public async Task<ActionResult<MovieTheatherModel>> Get(int id)
        {
            return await _movieDeatilsService.GetTheaterDetails(id);
        }

        [HttpPost]
        public async Task<IActionResult> Post(MovieTheatherModel model)
        {
            await _movieDeatilsService.Inset(model);
            return Ok();
        }
        [HttpPut]
        public async Task<IActionResult> Put(MovieTheatherModel model)
        {
            await _movieDeatilsService.Update(model);
            return Ok();
        }

        [HttpPost]
        public async Task<IActionResult> delete(MovieTheatherModel model)
        {
            await _movieTheaterService.Delete(model);
            return Ok();
        }
    }
}
