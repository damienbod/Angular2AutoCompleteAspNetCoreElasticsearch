using Microsoft.AspNetCore.Mvc;

namespace Angular2AutoCompleteAspNetCoreElasticsearch.Controllers
{
    [Route("api/[controller]")]
    public class PersonCityController : Controller
    {
        private readonly IPersonCitySearchProvider _personCitySearchProvider;

        public PersonCityController(IPersonCitySearchProvider personCitySearchProvider)
        {
            _personCitySearchProvider = personCitySearchProvider;
        }

        // GET: api/values
        [HttpGet]
        public IActionResult Get()
        {
            return Ok(_personCitySearchProvider.QueryString(""));
        }

        [HttpGet("{id}")]
        public IActionResult Get(int id)
        {
            return new JsonResult("todo");
        }

        [HttpGet("{searchtext}")]
        public IActionResult Search(string searchtext)
        {
            return new JsonResult("todo");
        }

        [HttpGet("ElasticsearchStatus")]
        public IActionResult GetElasticsearchStatus()
        {
            return Ok(_personCitySearchProvider.GetStatus());
        }
    }
}
