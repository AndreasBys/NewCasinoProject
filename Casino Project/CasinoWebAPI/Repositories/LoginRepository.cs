using Microsoft.EntityFrameworkCore;

namespace CasinoWebAPI.Repositories
{

    public interface ILoginRepository
    {
        Task<List<Login>> GetAllLoginAsync();
        

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




    }
}
