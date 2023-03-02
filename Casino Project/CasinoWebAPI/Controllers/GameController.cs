namespace CasinoWebAPI.Controllers
{
    [Route("api/[Controller]")]
    [ApiController]
    public class GameController : ControllerBase
    {

        private readonly IGameService _gameService;

        public GameController(IGameService gameService)
        {
            _gameService = gameService;

        }



        [HttpGet]
        public async Task<IActionResult> GetAllGamesAsync()
        {
            try
            {
                List<GameResponse> game = await _gameService.GetAllGamesAsync();
                if (game.Count() == 0)
                {
                    return NoContent();
                }
                return Ok(game);
            }
            catch (Exception ex)
            {
                return Problem(ex.Message);
            }


        }

        [HttpPost]
        public async Task<IActionResult> SendWin([FromBody] GameRequest gameRequest)
        {
            try
            {
                var game = await _gameService.GameWin(gameRequest);

                return Ok(game);
            }
            catch (Exception ex)
            {
                return Problem(ex.Message);
            }
        }











    }
}
