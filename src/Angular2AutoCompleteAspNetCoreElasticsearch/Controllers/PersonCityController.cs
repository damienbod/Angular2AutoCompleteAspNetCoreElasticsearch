using Microsoft.AspNetCore.Mvc;
using SearchComponent;

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

        [HttpGet("search/{searchtext}")]
        public IActionResult Search(string searchtext, int? from)
        {
            return Ok(_personCitySearchProvider.Search(searchtext.ToLower(), from.GetValueOrDefault()));
        }

        [HttpGet("querystringsearch/{searchtext}")]
        public IActionResult QueryString(string searchtext)
        {
            return Ok(_personCitySearchProvider.QueryString(searchtext));
        }

        [HttpGet("autocomplete/{searchtext}")]
        public IActionResult AutoComplete(string searchtext)
        {
            return Ok(_personCitySearchProvider.AutocompleteSearch(searchtext.ToLower()));
        }

        [HttpGet("createindex")]
        public IActionResult CreateIndex()
        {
            _personCitySearchProvider.CreateIndex();
            return Ok("index created");
        }

        [HttpGet("createtestdata")]
        public IActionResult CreateTestData()
        {
            _personCitySearchProvider.CreateTestData();
            return Ok("test data created");
        }

        [HttpGet("indexexists")]
        public IActionResult GetElasticsearchStatus()
        {
            return Ok(_personCitySearchProvider.GetStatus());
        }
    }
}
