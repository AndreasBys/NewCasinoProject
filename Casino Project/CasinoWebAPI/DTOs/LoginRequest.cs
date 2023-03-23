namespace CasinoWebAPI.DTOs
{
    public class LoginRequest
    {

        

        [Required]
        public string Email { get; set; }

        public string Password { get; set; } = string.Empty;




    }
}
