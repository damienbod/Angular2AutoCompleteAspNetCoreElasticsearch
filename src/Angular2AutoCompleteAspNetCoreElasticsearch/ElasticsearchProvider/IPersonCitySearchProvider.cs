using System.Collections.Generic;
using ElasticsearchCRUD.ContextSearch.SearchModel;

namespace Angular2AutoCompleteAspNetCoreElasticsearch
{
    public interface IPersonCitySearchProvider
    {
        void CreateIndex();

        void CreateTestData();

        SearchResult<PersonCity> Search(string name);

        bool GetStatus();

        IEnumerable<PersonCity> QueryString(string term);
    }
}