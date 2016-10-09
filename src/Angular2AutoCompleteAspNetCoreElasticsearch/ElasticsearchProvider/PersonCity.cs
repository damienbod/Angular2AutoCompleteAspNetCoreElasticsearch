using ElasticsearchCRUD.ContextAddDeleteUpdate.CoreTypeAttributes;
using ElasticsearchCRUD.Model;

namespace Angular2AutoCompleteAspNetCoreElasticsearch
{
    public class PersonCity
    {
        public long Id { get; set; }

        public string Name { get; set; }

        public string FamilyName { get; set; }

        [ElasticsearchString(Fields = typeof(FieldDataDefinition), Analyzer = LanguageAnalyzers.German)]
        public string Info { get; set; }
    }
}