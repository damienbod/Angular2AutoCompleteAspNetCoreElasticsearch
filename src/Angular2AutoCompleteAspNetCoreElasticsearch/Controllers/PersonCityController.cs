using Microsoft.AspNetCore.Mvc;

namespace Angular2AutoCompleteAspNetCoreElasticsearch.Controllers
{
    [Route("api/[controller]")]
    public class PersonCityController : Controller
    {
        private IElasticsearchGermanSearchProvider readonly _elasticsearchGermanSearchProvider;

        public PersonCityController(IElasticsearchGermanSearchProvider elasticsearchGermanSearchProvider)
        {
            _elasticsearchGermanSearchProvider = elasticsearchGermanSearchProvider;
        }

        // GET: api/values
        [HttpGet]
        public IActionResult Get()
        {
            return new JsonResult(new string[] { "todo1", "todo2", "todo3" });
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
            return new JsonResult("todo");
        }
    }
}
