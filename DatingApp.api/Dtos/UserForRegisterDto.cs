using System.ComponentModel.DataAnnotations;

namespace DatingApp.api.Dtos
{
    public class UserForRegisterDto
    {
        [Required]
        public string Username {get; set; }

        [Required]
        [StringLength(50, MinimumLength = 4, ErrorMessage = "Password must be between 4 & 8 characters in length")]
        public string Password {get; set; }
    }
}