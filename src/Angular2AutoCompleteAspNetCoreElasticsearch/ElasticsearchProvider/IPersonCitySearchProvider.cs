using System.Collections.Generic;

namespace Angular2AutoCompleteAspNetCoreElasticsearch
{
    public interface IPersonCitySearchProvider
    {
        void CreateIndex();

        void CreateTestData();

        bool GetStatus();

        IEnumerable<PersonCity> QueryString(string term);
    }
}