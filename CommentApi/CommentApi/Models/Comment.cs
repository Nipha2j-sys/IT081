namespace CommentApi.Models
{
    public class Comment
    {
        public int Id { get; set; }
        public string Username { get; set; } = "Blend 285";
        public string Message { get; set; }
        public DateTime CreatedAt { get; set; } = DateTime.Now;
    }
}