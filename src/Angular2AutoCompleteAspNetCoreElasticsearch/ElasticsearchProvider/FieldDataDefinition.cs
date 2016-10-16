using ElasticsearchCRUD.ContextAddDeleteUpdate.CoreTypeAttributes;

namespace Angular2AutoCompleteAspNetCoreElasticsearch
{
    public class FieldDataDefinition
    {
        [ElasticsearchString(Index = StringIndex.not_analyzed)]
        public string Raw { get; set; }
    }
}
