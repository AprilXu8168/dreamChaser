using Microsoft.Identity.Client;

namespace TodoApi.Models;

public class TodoItemDTO
{
    public int ID { get; set; }
    public string? Name { get; set; }

    public bool IsComplete { get; set; } 
}