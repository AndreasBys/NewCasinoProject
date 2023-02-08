namespace CasinoWebAPI.Database
{
    public class DatabaseContext : DbContext
    {
        public DatabaseContext(DbContextOptions<DatabaseContext> options) : base(options) { }

        public DbSet<Login> Login { get; set; }
        public DbSet<Game> Game { get; set; }
        
        public DbSet<Bruger> Bruger { get; set; }


        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Login>().HasData(
                new Login
                {
                    LoginID = 1,
                    Email = "Testmail@gmail.com",
                    Password = "Passw0rd",
                    Balance = 99999,

                });
            modelBuilder.Entity<Game>().HasData(
                new Game
                {
                    Game_ID = 1,
                    Result = 1,
                    LoginID = 1,
                });

            modelBuilder.Entity<Bruger>().HasData(
                new Bruger
                {
                    UserID = 1,
                    UserName = "Superman",
                    FullName = "Clark Kent",
                    MobileNo = "10203040",
                    LoginID = 1,
                }


                );


        }

    }
}
