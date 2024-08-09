using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System.Threading.Tasks;
using TodoApi.Models;

namespace TodoApi.Controllers
{
    [Route("[controller]")]
    [ApiController]  // Add this attribute to enable API-specific features
    public class HelloWorldController : ControllerBase
    {
        private readonly TodoContext _context;

        public HelloWorldController(TodoContext context)
        {
            _context = context;
        }
        [HttpGet]
        public async Task<IActionResult> Get()
        {
            // var json = "{ \"message\": \"Hello World!\" }";
            // return Content(json, "application/json");  // Return the JSON content

            var words = await _context.todoItems
                .Where(x => x.Secret != null)
                .ToListAsync();
            foreach (var item in words)
                {
                    Console.WriteLine($"Secret: {item.Secret}");
                }
            return Ok(words);
        }
    }
}