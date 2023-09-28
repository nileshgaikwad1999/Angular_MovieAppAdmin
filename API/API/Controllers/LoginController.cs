using API.Model;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers
{
    [Route("api/[controller]/[action]")]
    [ApiController]
    public class LoginController : ControllerBase
    {
        [HttpPost]
        public IActionResult post(LoginModel model)
        {
            LoginModel loginModel = new LoginModel()
            {
                userName="user@co.com", 
                password="12345678"
            };
            if (model.userName == loginModel.userName && model.password == loginModel.password)
            {
                return Ok("sucess");
            }
            return BadRequest();
        }
    }
}
                                                                                                                                                                                                                                                                                                                                                                                                                    