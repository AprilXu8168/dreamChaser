using System;

namespace todolist.Models
{
    public class Task
    {
        public int Id { get; set; }
        
        public string TaskContents { get; set; }

        public bool TaskDone { get; set; }

    }
}

