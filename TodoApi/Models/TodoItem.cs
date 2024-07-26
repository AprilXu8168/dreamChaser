using Microsoft.AspNetCore.SignalR;

namespace TodoApi.Models;

public class TodoItem 
{
    public int ID { get; set; }
    public string? Name{ get; set; }
    public bool IsCompleted { get; set; }
    public string? Secret { get; set; }
}