using Microsoft.EntityFrameworkCore;
using Prova.Models;

namespace Prova.Data;

public class AppDataContext : DbContext
{
    public AppDataContext(DbContextOptions<AppDataContext>options) : base(options) {}

    public DbSet<Usuario> Usuarios {get; set;}

    public DbSet<Imc> Imcs {get; set;}



    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        base.OnModelCreating(modelBuilder);
    }
}