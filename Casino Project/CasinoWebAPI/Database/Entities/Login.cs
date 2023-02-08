using System.Runtime.CompilerServices;

namespace CasinoWebAPI.Database.Entities
{
    public class Login
    {

        [Key]
        public int LoginID { get; set; }

        [Column(TypeName = "Nvarchar(255)")]
        public string Password { get; set; } = string.Empty;

        [Column(TypeName = "Nvarchar(255)")]
        public string Email { get; set; }

        [Column(TypeName = "decimal(8,2)")]
        public double Balance { get; set; } = 0;

    }
}
