using System;
using System.Collections.Generic;
using System.Linq;
using ElasticsearchCRUD;
using ElasticsearchCRUD.ContextAddDeleteUpdate.IndexModel.SettingsModel;
using ElasticsearchCRUD.ContextSearch.SearchModel;
using ElasticsearchCRUD.Model.SearchModel;
using ElasticsearchCRUD.Model.SearchModel.Queries;
using ElasticsearchCRUD.Tracing;

namespace Angular2AutoCompleteAspNetCoreElasticsearch
{
    public class PersonCitySearchProvider : IPersonCitySearchProvider
    {
        private readonly IElasticsearchMappingResolver _elasticsearchMappingResolver = new ElasticsearchMappingResolver();
        private const string ConnectionString = "http://localhost:9200";
        private readonly ElasticsearchContext _context;

        public PersonCitySearchProvider()
        {
            _context = new ElasticsearchContext(ConnectionString, new ElasticsearchSerializerConfiguration(_elasticsearchMappingResolver))
            {
                TraceProvider = new ConsoleTraceProvider()
            };

            //CreateIndex();

            //CreateTestData();
        }

        public void CreateIndex()
        {			
            _context.IndexCreate<PersonCity>(new IndexDefinition());
        }

        public void CreateTestData()
        {
            var jm = new PersonCity { Id = 1, FamilyName = "Moore", Info = "Muenich", Name = "John"};
            _context.AddUpdateDocument(jm, jm.Id);
            var jj = new PersonCity { Id = 2, FamilyName = "Jones", Info = "Münich", Name = "Johny" };
            _context.AddUpdateDocument(jj, jj.Id);
            var pm = new PersonCity { Id = 3, FamilyName = "Murphy", Info = "Munich", Name = "Paul" };
            _context.AddUpdateDocument(pm, pm.Id);
            var sm = new PersonCity { Id = 4, FamilyName = "McGurk", Info = "munich", Name = "Séan" };
            _context.AddUpdateDocument(sm, sm.Id);
            var sob = new PersonCity { Id = 5, FamilyName = "O'Brien", Info = "Not a much use, bit of a problem", Name = "Sean" };
            _context.AddUpdateDocument(sob, sob.Id);
            var tmc = new PersonCity { Id = 6, FamilyName = "McCauley", Info = "Couldn't a ask for anyone better", Name = "Tadhg" };
            _context.AddUpdateDocument(tmc, tmc.Id);

            _context.SaveChanges();
        }

        //{
        //  "query": {
        //		"match": {"name": "sean"}
        //	 }
        //  }
        //}
        public SearchResult<PersonCity> Search(string name)
        {
            var search = new Search()
            {
                Query = new Query(new MatchQuery("info", name))
            };			
            return _context.Search<PersonCity>(search).PayloadResult;
        }

        public IEnumerable<PersonCity> QueryString(string term)
        {
            var search = new Search()
            {
                Query = new Query(new QueryStringQuery(term))
            };
            var results = _context.Search<PersonCity>(search);

            return results.PayloadResult.Hits.HitsResult.Select(t => t.Source);
        }

        public bool GetStatus()
        {
            return _context.IndexExists<PersonCity>();
        }
    }
}

        // second example from http://gibrown.com/

        //{
        //  "filter": {
        //	"de_stop_filter": {
        //	  "type": "stop",
        //	  "stopwords": ["_german_"]
        //	},
        //	"de_stem_filter": {
        //	  "type": "stemmer",
        //	  "name": "minimal_german"
        //  },
        //  "analyzer": {
            //	"custom_german_icu": {
        //	  "type": "custom",
        //	  "filter": ["icu_normalizer", "de_stop_filter", "de_stem_filter", "icu_folding"],
        //	  "tokenizer": "icu_tokenizer"
        //  }
        //}

        //return new IndexDefinition
        //{
        //	IndexSettings =
        //	{
        //		Analysis = new Analysis
        //		{
        //			Filters= new AnalysisFilter
        //			{
        //				CustomFilters= new List<AnalysisFilterBase>
        //				{
        //					new StopTokenFilter("de_stop_filter")
        //					{
        //						StopwordsList = new List<string>{"_german_"}
        //					}, 
        //					new StemmerTokenFilter("de_stem_filter")
        //					{
        //						StemmerName = Stemmer.minimal_german
        //					}
        //				}
        //			},
        //			Analyzer =
        //			{
        //				Analyzers = new List<AnalyzerBase>
        //				{
        //					new CustomAnalyzer("custom_german_icu")
        //					{
        //						Tokenizer = "icu_tokenizer",
        //						Filter= new List<string>{"icu_normalizer", "de_stop_filter", "de_stem_filter", DefaultTokenFilters.IcuFolding},
        //					}							
        //				}
        //			}
        //		},
        //		NumberOfShards = 3,
        //		NumberOfReplicas = 1
        //	},
        //};