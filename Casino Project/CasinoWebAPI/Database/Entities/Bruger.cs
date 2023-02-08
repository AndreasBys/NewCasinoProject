namespace CasinoWebAPI.Database.Entities
{
    public class Bruger
    {

        [Key]
        public int UserID { get; set; }

        [Column(TypeName = "Nvarchar(255)")]
        public string UserName { get; set; } = string.Empty;

        [Column(TypeName = "Nvarchar(255)")]
        public string FullName { get; set; } = string.Empty;

        [Column(TypeName = "Nvarchar(255)")]
        public string MobileNo { get; set; } = string.Empty;

        [ForeignKey("Login.LoginID")]
        public int LoginID { get; set; }

        public Login Login { get; set; }



    }
}
