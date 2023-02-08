namespace CasinoWebAPI.Services
{
    public interface ILoginService
    {
        Task<List<LoginResponse>> GetAllLoginAsync();



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
    }
}
