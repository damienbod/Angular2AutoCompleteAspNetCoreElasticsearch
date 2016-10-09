using System.Collections.Generic;
using Angular2AutoCompleteAspNetCoreElasticsearch.ElasticsearchProvider;
using ElasticsearchCRUD.ContextSearch.SearchModel;

namespace Angular2AutoCompleteAspNetCoreElasticsearch
{
    public interface IPersonCitySearchProvider
    {
        void CreateIndex();

        void CreateTestData();

        SearchResult<PersonCity> Search(string name);

        ElasticsearchStatus GetStatus();

        IEnumerable<PersonCity> QueryString(string term);
    }
}