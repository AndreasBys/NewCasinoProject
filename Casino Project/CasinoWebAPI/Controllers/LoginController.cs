using Microsoft.AspNetCore.Components;

namespace CasinoWebAPI.Controllers
{
    [Route("api/[Controller]")]
    [ApiController]
    public class LoginController : ControllerBase
    {

        private readonly ILoginService _loginService;

        public LoginController(ILoginService loginService)
        {
            _loginService = loginService;

        }



        [HttpGet]
        public async Task<IActionResult> GetAllLoginAsync()
        {

            try
            {
                List<LoginResponse> login = await _loginService.GetAllLoginAsync();
                if (login.Count() == 0)
                {
                    return NoContent();
                }
                return Ok(login);
            }
            catch (Exception ex)
            {
                return Problem(ex.Message);
            }
        }

        [HttpGet]
        [Route("{ID}")]
        public async Task<IActionResult> GetLoginByID([FromRoute] int ID)
        {
            try
            {
                var login = await _loginService.GetLoginByID(ID);

                if (login == null)
                {
                    return NotFound();

                }
                return Ok(login);
            }
            catch (Exception ex)
            {
                return Problem(ex.Message);
            }
        }

        [HttpPost]
        [Route("LoginRequest")]
        public async Task<IActionResult> AuthLoginRequest([FromBody] LoginRequest login)
        {
            try
            {
                var logins = await _loginService.AuthLoginRequest(login);

                if (logins == null)
                {
                    return NotFound();
                }
                return Ok(logins);
            }
            catch (Exception ex)
            {
                return Problem(ex.Message);
            }
        }

    }
}
