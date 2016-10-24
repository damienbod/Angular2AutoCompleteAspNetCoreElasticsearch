using ElasticsearchCRUD.ContextAddDeleteUpdate.CoreTypeAttributes;

namespace SearchComponent
{
    public class PersonCityMappingDto
    {
        public long Id { get; set; }

        [ElasticsearchString(CopyToList = new[] { "autocomplete", "did_you_mean" })]
        public string Name { get; set; }

        [ElasticsearchString(CopyToList = new[] { "autocomplete", "did_you_mean" })]
        public string FamilyName { get; set; }

        [ElasticsearchString(CopyToList = new[] { "autocomplete", "did_you_mean" })]
        public string Info { get; set; }

        [ElasticsearchString(CopyToList = new[] { "autocomplete", "did_you_mean" })]
        public string CityCountry { get; set; }

        [ElasticsearchString(CopyToList = new[] { "autocomplete", "did_you_mean" })]
        public string Metadata { get; set; }

        public string Web { get; set; }

        public string Github { get; set; }

        public string Twitter { get; set; }

        [ElasticsearchString(Analyzer = "didyoumean", SearchAnalyzer = "standard", TermVector = TermVector.yes)]
        public string did_you_mean { get; set; }

        [ElasticsearchString(Analyzer = "autocomplete")]
        public string autocomplete { get; set; }
    }
}
