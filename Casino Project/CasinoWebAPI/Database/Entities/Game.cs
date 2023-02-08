namespace CasinoWebAPI.Database.Entities
{
    public class Game
    {
        [Key]
        public int Game_ID { get; set; }

        [Column(TypeName = "decimal(8,2)")]
        public double Result { get; set; }

        [ForeignKey("Login.LoginID")]
        public int LoginID { get; set; }

        //public Bruger Bruger { get; set; }

        //public Login Login { get; set; }
    }
}
