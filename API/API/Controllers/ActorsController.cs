using API.Iservices;
using API.Model;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers
{
    [Route("api/[controller]/[action]")]
    [ApiController]
    public class ActorsController : ControllerBase
    {

        private IActorsService _actorsService;
        public ActorsController(IActorsService actorsService)
        {
            _actorsService = actorsService;
         }

        [HttpGet]
        public async Task<ActionResult<List<ActorsModel>>> Get()
        {
            return await _actorsService.Actors();
        }

        [HttpGet]
        [Route("{id}")]
        public async Task<ActionResult<ActorsModel>> Get(int id)
        {
            return await _actorsService.Actor(id);
        }

        [HttpPost]
        public async Task<IActionResult> Post(ActorsModel actor)
        {
            await _actorsService.Insert(actor);
            return Ok();
        }
        [HttpPut]
        public async Task<IActionResult> Put(ActorsModel model)
        {
            await _actorsService.Update(model);
            return Ok();
        }

        [HttpPost]
        public async Task<IActionResult> delete(ActorsModel model)
        {
            await _actorsService.Delete(model);
            return Ok();
        }

    }
}
