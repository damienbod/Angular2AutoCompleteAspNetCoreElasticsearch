using System.Collections.Generic;

namespace SearchComponent
{
    public interface IPersonCitySearchProvider
    {
        void CreateIndex();

        void CreateTestData();

        IEnumerable<string> AutocompleteSearch(string term);

        PersonCitySearchResult Search(string term, int from);

        bool GetStatus();

        IEnumerable<PersonCity> QueryString(string term);
    }
}