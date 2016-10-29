using ElasticsearchCRUD.ContextAddDeleteUpdate.CoreTypeAttributes;

namespace SearchComponent
{
    public class PersonCityMappingDto
    {
        public long Id { get; set; }

        [ElasticsearchString(CopyToList = new[] { "autocomplete", "searchfield" })]
        public string Name { get; set; }

        [ElasticsearchString(CopyToList = new[] { "autocomplete", "searchfield" })]
        public string FamilyName { get; set; }

        [ElasticsearchString(CopyToList = new[] { "autocomplete", "searchfield" })]
        public string Info { get; set; }

        [ElasticsearchString(CopyToList = new[] { "autocomplete", "searchfield" })]
        public string CityCountry { get; set; }

        [ElasticsearchString(CopyToList = new[] { "autocomplete", "searchfield" })]
        public string Metadata { get; set; }

        public string Web { get; set; }

        public string Github { get; set; }

        public string Twitter { get; set; }

        public string Mvp { get; set; }

        [ElasticsearchString(Analyzer = "edge_ngram_search", SearchAnalyzer = "standard", TermVector = TermVector.yes)]
        public string searchfield { get; set; }

        [ElasticsearchString(Analyzer = "autocomplete")]
        public string autocomplete { get; set; }
    }
}
