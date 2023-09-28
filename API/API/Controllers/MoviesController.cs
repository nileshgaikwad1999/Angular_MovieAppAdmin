using API.Iservices;
using API.Model;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers
{
    [Route("api/[controller]/[action]")]
    [ApiController]
    public class MoviesController : ControllerBase
    {

        private IMovieService _movieService;
        public MoviesController(IMovieService movieService)
        {
            _movieService = movieService;
        }

        [HttpGet]
        public async Task<ActionResult<List<MovieModel>>> Get()
        {
            return await _movieService.movies();
        }

        [HttpGet]
        [Route("{id}")]
        public async Task<ActionResult<MovieModel>> Get(int id)
        {
            return await _movieService.movie(id);
        }

        [HttpPost]
        public async Task<IActionResult> Post(MovieModel model)
        {
            await _movieService.Insert(model);
            return Ok();
        }
        [HttpPut]
        public async Task<IActionResult> Put(MovieModel model)
        {
            await _movieService.Update(model);
            return Ok();
        }

        [HttpPost]
        public async Task<IActionResult> delete(MovieModel model)
        {
            await _movieService.Delete(model);
            return Ok();
        }

    }
}
