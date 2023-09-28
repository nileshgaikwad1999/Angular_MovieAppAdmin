using API.Iservices;
using API.Model;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers
{
    [Route("api/[controller]/[action]")]
    [ApiController]
    public class GenrasController : ControllerBase
    {
        private IgenresService _genresService;
        public GenrasController(IgenresService genresService)
        {
            _genresService = genresService;
        }

        [HttpGet]
        public async Task<ActionResult<List<genersModel>>> Get()
        {
            return await _genresService.geners();  
        }

        [HttpGet]
        [Route("{id}")]
        public async Task<ActionResult<genersModel>> Get(int id)
        {
            return await _genresService.geners(id);
        }

        [HttpPost]
        public async  Task<IActionResult> Post(genersModel geners)
        {
          await  _genresService.Insert(geners);
            return Ok();
        }
        [HttpPut]
        public async Task<IActionResult> Put(genersModel model)
        {
           await _genresService.Update(model);
            return Ok();
        }

        [HttpPost]
        public async Task<IActionResult> delete(genersModel model)
        {
            await _genresService.Delete(model);
            return Ok();
        }
    }
}
