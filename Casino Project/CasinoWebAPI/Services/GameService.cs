using CasinoWebAPI.DTOs;

namespace CasinoWebAPI.Services
{
    public interface IGameService
    {
        Task<List<GameResponse>> GetAllGamesAsync();
        Task<GameResponse> GameWin(GameRequest games);



    }


    public class GameService : IGameService
    {

        private readonly IGameRepository _gameRepository;

        public GameService(IGameRepository gameRepository)
        {
            _gameRepository = gameRepository;
        }


        private GameResponse GameToGameResponse(Game game)
        {
            return new GameResponse
            {
                Game_ID = game.Game_ID,
                Result= game.Result,
                LoginID= game.LoginID
            };
        }
        private Game GameRequestToGame(GameRequest game)
        {
            return new Game
            {
                Result = game.Result,
                LoginID = game.LoginID
            };
        }






        public async Task<List<GameResponse>> GetAllGamesAsync()
        {
            var game = await _gameRepository.GetAllGamesAsync();

            if(game != null)
            {
                return game.Select(game => GameToGameResponse(game)).ToList();
            
            }

            return null;

        }

        public async Task<GameResponse> GameWin(GameRequest games)
        {
            var game = await _gameRepository.GameWin(GameRequestToGame(games));

            if(game == null)
            {
                throw new ArgumentNullException();
            }


            return GameToGameResponse(game);
        }
    }
}
