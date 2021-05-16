using HajosTeszt.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace HajosTeszt
{
    //[Route("api/[controller]")]
    [ApiController]
    public class BoatController : ControllerBase
    {

        [HttpGet]
        [Route("question/{sorszámok}")]
        public ActionResult M1(int sorszámok)
        {
            HajostesztContext context = new HajostesztContext();
            var kérdés = (from x in context.Questions
                          where x.QuestionId == sorszámok
                          select x).FirstOrDefault();

            if (kérdés == null) return BadRequest("Nincs ilyen sorszámú kérdés");

            return new JsonResult(kérdés);
        }
    }
}

