using Microsoft.IdentityModel.Tokens;
using System.Security.Claims;
using System.Text;

namespace CasinoWebAPI.Auth
{
    public class TokenAuthenticate
    {



        public string GenerateToken(Login login)
        {
            // Laver en ny handler
            JwtSecurityTokenHandler handler = new JwtSecurityTokenHandler();

            // Token nøglen
            var tokennoegle = Encoding.ASCII.GetBytes("adam");

            // Token beskrivelse / Token Attributter
            SecurityTokenDescriptor tokenDESC = new SecurityTokenDescriptor()
            {
                // Vi giver vores token et navn som er id'et + deres email
                Subject = new ClaimsIdentity(new[] {new Claim("id", login.LoginID.ToString(),login.Email.ToString())}),
                // Nøglen er sat til at vare i 7 dage
                Expires = DateTime.UtcNow.AddDays(7),
                // Vi generer en nøgle ud fra vores "adam" secret, så når vores nøgle bliver generet med payload, header og secret kan vi verificere den
                SigningCredentials = new(new SymmetricSecurityKey(tokennoegle), SecurityAlgorithms.HmacSha256Signature)
            };
            SecurityToken token = handler.CreateToken(tokenDESC);
            return handler.WriteToken(token);
        }

        public int? TokenValidation(string token)
        {
            if (token == null)
            {
                return null;
            }

            var tokennoegle = Encoding.ASCII.GetBytes("adam");

            JwtSecurityTokenHandler handler = new JwtSecurityTokenHandler();







        }
    }
}
