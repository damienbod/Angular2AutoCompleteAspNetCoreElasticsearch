using ElasticsearchCRUD.ContextSearch.SearchModel;

namespace Angular2AutoCompleteAspNetCoreElasticsearch
{
    public interface IElasticsearchGermanSearchProvider
    {
        void CreateIndex();
        void CreateTestData();

        SearchResult<PersonCity> Search(string name);
    }
}