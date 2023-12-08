using System.Security.Cryptography;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Prova.Data;
using Prova.Models;

namespace Prova.Controllers;

[ApiController]
[Route("api/imc")]

public class ImcController : ControllerBase
{

    private readonly AppDataContext _ctx;
    public ImcController(AppDataContext ctx)
    {
        _ctx = ctx;
    }
    [HttpGet]
    [Route("listar")]

    public IActionResult Listar()
    {
        try 
        {
            List<Imc> imcs = _ctx.Imcs.ToList();
            return imcs.Count == 0 ? NotFound(): Ok(imcs);
        }
        catch (Exception e)
        {
            return BadRequest(e.Message);
        }
    }

    [HttpPost]
    [Route("cadastrar")]
    public IActionResult Cadastrar([FromBody] Imc imc)
    {
        try 
        
        {
            Usuario? usuario = _ctx.Usuarios.Find(imc.UsuarioId);
            if(usuario == null)
            {
                return NotFound();
            }
            Imc Imc = new Imc
            {
                altura = imc.altura,
                peso = imc.peso
            };
            _ctx.Imcs.Add(imc);
            _ctx.SaveChanges();
            return Created("",imc);
        }
        catch (Exception e)
        {
            Console.WriteLine(e);
            return BadRequest(e.Message);
        }
    }
    
}

