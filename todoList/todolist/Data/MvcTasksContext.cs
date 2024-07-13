using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using todolist.Models;

namespace MvcTasks.Data
{
    public class MvcTasksContext : DbContext
    {
        public MvcTasksContext (DbContextOptions<MvcTasksContext> options)
            : base(options)
        {
        }

        public DbSet<todolist.Models.Task> Task { get; set; } = default!;
    }
}
