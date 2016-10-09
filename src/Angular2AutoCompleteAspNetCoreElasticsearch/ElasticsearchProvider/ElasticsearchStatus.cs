namespace Angular2AutoCompleteAspNetCoreElasticsearch.ElasticsearchProvider
{
    public class ElasticsearchStatus
    {
        bool SearchEngineExistsForConnection { get; set; }

        bool IndexExists { get; set; }
    }
}
