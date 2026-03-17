using Microsoft.AspNetCore.Mvc;
using CommentApi.Data;
using CommentApi.Models;

namespace CommentApi.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class CommentController : ControllerBase
    {
        private readonly AppDbContext _context;

        public CommentController(AppDbContext context)
        {
            _context = context;
        }

        [HttpGet]
        public IActionResult Get()
        {
            return Ok(_context.Comments.OrderByDescending(c => c.Id).ToList());
        }

        [HttpPost]
        public IActionResult Post(Comment comment)
        {
            comment.Username = "Blend 285";

            _context.Comments.Add(comment);
            _context.SaveChanges();

            return Ok(comment);
        }
    }
}