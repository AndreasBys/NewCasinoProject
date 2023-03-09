using static CasinoWebAPI.Repositories.GameRepository;

namespace CasinoWebAPI.Repositories
{
    public interface IGameRepository
    {
        Task<List<Game>> GetAllGamesAsync();
        Task<Game> GameWin(Game games);
        Task<Game?> FindWin(int Game_ID);
    }
    public class GameRepository : IGameRepository
    {

        private readonly DatabaseContext _context;

        public GameRepository(DatabaseContext context)
        {
            _context = context;
        }

        public async Task<Game?> FindWin(int Game_ID)
        {
            return await _context.Game.FirstOrDefaultAsync(a => Game_ID == a.Game_ID);
        }

        public async Task<List<Game>> GetAllGamesAsync()
        {
            return await _context.Game.ToListAsync();
        }

        // Gemmer resultatet fra et spin
        public async Task<Game> GameWin(Game games)
        {
            // Tilføjer resultatet til vores context
            _context.Game.Add(games);
            // Finder det login der passer til vores games.loginID property, og returnere login objektet hvor det passer
            var login = await _context.Login.FirstOrDefaultAsync(x => games.LoginID == x.LoginID);
            login.Balance += games.Result;
            // Gemmer contexten til databasen
            await _context.SaveChangesAsync();
            // Finder det spil vi lige har lagt i databasen
            games = await FindWin(games.Game_ID);
            //Returnerer det
            return games;
        }




    }
}
