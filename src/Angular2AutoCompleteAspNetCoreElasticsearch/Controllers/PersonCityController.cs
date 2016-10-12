using System.Linq;
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
            return Ok(_personCitySearchProvider.QueryString("*"));
        }

        [HttpGet("{id}")]
        public IActionResult Get(int id)
        {
            return new JsonResult("todo");
        }

        [HttpGet("search/{searchtext}")]
        public IActionResult Search(string searchtext)
        {
            return Ok(_personCitySearchProvider.QueryString(searchtext));
        }

        [HttpGet("createindex")]
        public IActionResult CreateIndex()
        {
            _personCitySearchProvider.CreateIndex();
            return Created("http://localhost:5000/api/PersonCity/createindex/", "index created");
        }

        [HttpGet("createtestdata")]
        public IActionResult CreateTestData()
        {
            _personCitySearchProvider.CreateTestData();
            return Created("http://localhost:5000/api/PersonCity/createtestdata/", "test data created");
        }

        [HttpGet("indexexists")]
        public IActionResult GetElasticsearchStatus()
        {
            return Ok(_personCitySearchProvider.GetStatus());
        }
    }
}
