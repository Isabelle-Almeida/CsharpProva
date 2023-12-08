using System.Security.Cryptography;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Prova.Data;
using Prova.Models;

namespace Prova.Controllers;

[ApiController]
[Route("api/usuario")]

public class UsuarioController : ControllerBase
{

    private readonly AppDataContext _ctx;
    public UsuarioController(AppDataContext ctx)
    {
        _ctx = ctx;
    }
    [HttpGet]
    [Route("listar")]

    public IActionResult Listar()
    {
        try 
        {
            List<Usuario> usuarios = _ctx.Usuarios.ToList();
            return usuarios.Count == 0 ? NotFound(): Ok(usuarios);
        }
        catch (Exception e)
        {
            return BadRequest(e.Message);
        }
    }

    [HttpPost]
    [Route("cadastrar")]
    public IActionResult Cadastrar([FromBody] Usuario usuario)
    {
        try 
        
        {
            Usuario Usuario = new Usuario
            {
                Nome = usuario.Nome,
                Nascimento = usuario.Nascimento
            };
            _ctx.Usuarios.Add(usuario);
            _ctx.SaveChanges();
            return Created("",usuario);
        }
        catch (Exception e)
        {
            Console.WriteLine(e);
            return BadRequest(e.Message);
        }
    }
    
}

