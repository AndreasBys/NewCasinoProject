namespace CasinoWebAPI.DTOs
{
    public class LoginRequest
    {

        [Required]
        public string Password { get; set; } = string.Empty;

        [Required]

        public string Email { get; set; }

        [Required]
        public double Balance { get; set; }



    }
}
