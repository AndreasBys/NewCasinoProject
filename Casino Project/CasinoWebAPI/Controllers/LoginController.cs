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
    }
}
