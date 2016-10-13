using System;
using System.Collections.Generic;
using System.Linq;
using ElasticsearchCRUD;
using ElasticsearchCRUD.ContextAddDeleteUpdate.IndexModel.SettingsModel;
using ElasticsearchCRUD.ContextAddDeleteUpdate.IndexModel.SettingsModel.Analyzers;
using ElasticsearchCRUD.ContextAddDeleteUpdate.IndexModel.SettingsModel.Filters;
using ElasticsearchCRUD.ContextSearch.SearchModel;
using ElasticsearchCRUD.ContextSearch.SearchModel.AggModel;
using ElasticsearchCRUD.Model;
using ElasticsearchCRUD.Model.SearchModel;
using ElasticsearchCRUD.Model.SearchModel.Aggregations;
using ElasticsearchCRUD.Model.SearchModel.Queries;
using ElasticsearchCRUD.Model.SearchModel.Sorting;
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
            _context.IndexCreate<PersonCity>(this.CreateNewIndexDefinition());
        }

        private IndexDefinition CreateNewIndexDefinition()
        {
            return new IndexDefinition
            {
                IndexSettings =
                {
                    Analysis = new Analysis
                    {
                        Analyzer =
                        {
                            Analyzers = new List<AnalyzerBase>
                            {
                                new CustomAnalyzer("john_analyzer")
                                {
                                    Tokenizer = DefaultTokenizers.Whitespace,
                                    Filter = new List<string> {DefaultTokenFilters.Lowercase, "john_synonym"},
                                },
                                new CustomAnalyzer("suggest")
                                {
                                    Tokenizer = DefaultTokenizers.Standard,
                                    Filter = new List<string> {DefaultTokenFilters.Lowercase},
                                    CharFilter = new List<string> {DefaultCharFilters.HtmlStrip},
                                },
                                new CustomAnalyzer("autocomplete")
                                {
                                    Tokenizer = DefaultTokenizers.Standard,
                                    Filter = new List<string> {DefaultTokenFilters.Lowercase, "autocompleteFilter"},
                                    CharFilter = new List<string> {DefaultCharFilters.HtmlStrip},
                                }
                            }
                        },
                        Filters =
                        {
                            CustomFilters = new List<AnalysisFilterBase>
                            {
                                new SynonymTokenFilter("john_synonym")
                                {
                                    Synonyms = new List<string>
                                    {
                                        "sean  => john, sean, séan",
                                        "séan => john, sean, séan",
                                        "johny => john",
                                    }
                                },
                                new ShingleTokenFilter("autocompleteFilter")
                                {
                                    MaxShingleSize = 5,
                                    MinShingleSize = 2
                                },
                                new StemmerTokenFilter("stemmer"),
                                new StopTokenFilter("stopwords")
                            }
                        }
                    }
                },
            };

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
            var id7 = new PersonCity { Id = 7, FamilyName = "Martini", Info = "Köniz", Name = "Christian" };
            _context.AddUpdateDocument(id7, id7.Id);
            var id8 = new PersonCity { Id = 8, FamilyName = "Lee", Info = "Basel Stadt", Name = "Phil" };
            _context.AddUpdateDocument(id8, id8.Id);
            var id9 = new PersonCity { Id = 9, FamilyName = "Wil", Info = "Basel Stadt", Name = "Nicole" };
            _context.AddUpdateDocument(id9, id9.Id);
            var id10 = new PersonCity { Id = 10, FamilyName = "Mario", Info = "Basel in some small town", Name = "Tim" };
            _context.AddUpdateDocument(id10, id10.Id);
            var id11 = new PersonCity { Id = 11, FamilyName = "Martin", Info = "Biel", Name = "Scott" };
            _context.AddUpdateDocument(id11, id11.Id);
            var id12 = new PersonCity { Id = 12, FamilyName = "Newman", Info = "Lyss", Name = "Tim" };
            _context.AddUpdateDocument(id12, id12.Id);
            var id13 = new PersonCity { Id = 13, FamilyName = "Lamb", Info = "Thun", Name = "Carla" };
            _context.AddUpdateDocument(id13, id13.Id);
            var id14 = new PersonCity { Id = 14, FamilyName = "Goldi", Info = "Zug", Name = "Ida" };
            _context.AddUpdateDocument(id14, id14.Id);
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
            //var search = new Search()
            //{
            //    Query = new Query(new QueryStringQuery(term))
            //};
            var results = _context.Search<PersonCity>(BuildQueryStringSearch(term));

            return results.PayloadResult.Hits.HitsResult.Select(t => t.Source);
        }

        private Search BuildQueryStringSearch(string term)
        {
            var names = "";
            if (term != null)
            {
                names = term.Replace("+", " OR *");
            }

            var search = new Search
            {
                Query = new Query(new QueryStringQuery(names + "*"))
            };

            return search;
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