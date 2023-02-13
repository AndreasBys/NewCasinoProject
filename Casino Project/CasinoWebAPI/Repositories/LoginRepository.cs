using Microsoft.EntityFrameworkCore;

namespace CasinoWebAPI.Repositories
{

    public interface ILoginRepository
    {
        Task<List<Login>> GetAllLoginAsync();
        Task<Login> GetLoginByID(int id);
 
    }

    public class LoginRepository : ILoginRepository
    {
        

        private readonly DatabaseContext _context;
        public LoginRepository(DatabaseContext context)
        {
            _context = context;
        }

        public async Task<List<Login>> GetAllLoginAsync()
        {
            return await _context.Login.ToListAsync();
        }

        public async Task<Login?> GetLoginByID(int id)
        {

            return await _context.Login.FirstOrDefaultAsync(x => id == x.LoginID);
        }
    }
}
