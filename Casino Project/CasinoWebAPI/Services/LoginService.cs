namespace CasinoWebAPI.Services
{
    public interface ILoginService
    {
        Task<List<LoginResponse>> GetAllLoginAsync();
        Task<LoginResponse> GetLoginByID(int ID);


    }




    public class LoginService : ILoginService
    {

        private readonly ILoginRepository _loginRepository;

        public LoginService(ILoginRepository loginRepository)
        {
            _loginRepository = loginRepository;
        }

        private LoginResponse LoginToLoginReponse(Login login)
        {
            return new LoginResponse
            {
                LoginID = login.LoginID,
                Balance = login.Balance,
                Email = login.Email,
                Password = login.Password,
            };
        }
        public async Task<List<LoginResponse>> GetAllLoginAsync()
        {
            var login = await _loginRepository.GetAllLoginAsync();

            if (login != null)
            {
                return login.Select(login => LoginToLoginReponse(login)).ToList();
            }

            return null;
        }

        public async Task<LoginResponse> GetLoginByID(int loginid)
        {
            // Går ned i repositoriet efter et login id vi får fra controlleren / Når vi kalder metoden
            var login = await _loginRepository.GetLoginByID(loginid);
            if (login != null)
            {
                // Når vi har fået vores login object, returnerer vi det some et loginresponse
                return LoginToLoginReponse(login);
            }
            return null;
        }
    }
}
