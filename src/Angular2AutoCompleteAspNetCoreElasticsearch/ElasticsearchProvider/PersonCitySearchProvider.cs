using System;
using System.Collections.Generic;
using System.Linq;
using ElasticsearchCRUD;
using ElasticsearchCRUD.ContextAddDeleteUpdate.IndexModel.MappingModel;
using ElasticsearchCRUD.ContextAddDeleteUpdate.IndexModel.SettingsModel;
using ElasticsearchCRUD.ContextAddDeleteUpdate.IndexModel.SettingsModel.Analyzers;
using ElasticsearchCRUD.ContextAddDeleteUpdate.IndexModel.SettingsModel.Filters;
using ElasticsearchCRUD.ContextAddDeleteUpdate.IndexModel.SettingsModel.Tokenizers;
using ElasticsearchCRUD.ContextSearch.SearchModel.AggModel;
using ElasticsearchCRUD.Model;
using ElasticsearchCRUD.Model.SearchModel;
using ElasticsearchCRUD.Model.SearchModel.Aggregations;
using ElasticsearchCRUD.Model.SearchModel.Queries;
using ElasticsearchCRUD.Model.SearchModel.Sorting;
using ElasticsearchCRUD.Tracing;

namespace SearchComponent
{
    public class PersonCitySearchProvider : IPersonCitySearchProvider
    {
        private readonly IElasticsearchMappingResolver _elasticsearchMappingResolver = new ElasticsearchMappingResolver();
        //private const string ConnectionString = "http://localhost.fiddler:9200";
        private const string ConnectionString = "http://localhost:9200";
        private readonly ElasticsearchContext _context;

        public PersonCitySearchProvider()
        {
            _elasticsearchMappingResolver.AddElasticSearchMappingForEntityType(typeof(PersonCityMappingDto), new PersonCityMapping());
            _context = new ElasticsearchContext(ConnectionString, new ElasticsearchSerializerConfiguration(_elasticsearchMappingResolver))
            {
                TraceProvider = new ConsoleTraceProvider()
            };
        }

        public void CreateIndex()
        {			
            _context.IndexCreate<PersonCityMappingDto>(CreateNewIndexDefinition());
        }

        public void CreateMapping()
        {
            _context.IndexCreateTypeMapping<PersonCityMappingDto>(new MappingDefinition() {});
        }

        private IndexDefinition CreateNewIndexDefinition()
        {
            return new IndexDefinition
            {
                IndexSettings =
                {
                    Analysis = new Analysis
                    {
                        Filters =
                        {
                            CustomFilters = new List<AnalysisFilterBase>
                            {
                                new StemmerTokenFilter("stemmer"),
                                new ShingleTokenFilter("autocompletefilter")
                                {
                                    MaxShingleSize = 5,
                                    MinShingleSize = 2
                                },
                                new StopTokenFilter("stopwords"),
                                new EdgeNGramTokenFilter("edge_ngram_filter")
                                {
                                    MaxGram = 20,
                                    MinGram = 2
                                }
                            }
                        },
                        Analyzer =
                        {
                            Analyzers = new List<AnalyzerBase>
                            {
                                new CustomAnalyzer("didyoumean")
                                {
                                    Tokenizer = DefaultTokenizers.Standard,
                                    Filter = new List<string> {DefaultTokenFilters.Lowercase, "edge_ngram_filter"},
                                    CharFilter = new List<string> {DefaultCharFilters.HtmlStrip}
                                },
                                new CustomAnalyzer("autocomplete")
                                {
                                    Tokenizer = DefaultTokenizers.Standard,
                                    Filter = new List<string> {DefaultTokenFilters.Lowercase, "autocompletefilter"},
                                    CharFilter = new List<string> {DefaultCharFilters.HtmlStrip}
                                },
                                new CustomAnalyzer("default")
                                {
                                    Tokenizer = DefaultTokenizers.Standard,
                                    Filter = new List<string> {DefaultTokenFilters.Lowercase, "stopwords", "stemmer"},
                                    CharFilter = new List<string> {DefaultCharFilters.HtmlStrip}
                                }
                                
                               
                            }
                        },
                        Tokenizers =
                        {
                            CustomTokenizers = new List<AnalysisTokenizerBase>
                            {
                                new EdgeNGramTokenizer("ngram_tokenizer")
                                {
                                    MaxGram = 4,
                                    MinGram = 4
                                }
                            }
                        }

                    }
                },
            };

        }

        public IEnumerable<string> AutocompleteSearch(string term)
        {
            var search = new Search
            {
                Size = 0,
                Aggs = new List<IAggs>
                {
                    new TermsBucketAggregation("autocomplete", "autocomplete")
                    {
                        Order= new OrderAgg("_count", OrderEnum.desc),
                        Include = new IncludeExpression(term + ".*")
                    }
                },
                Query = new Query(new PrefixQuery("autocomplete", term))
            };

            var items = _context.Search<PersonCity>(search);
            var aggResult = items.PayloadResult.Aggregations.GetComplexValue<TermsBucketAggregationsResult>("autocomplete");
            IEnumerable<string> results = aggResult.Buckets.Select(t =>  t.Key.ToString());
            return results;
        }

        public IEnumerable<PersonCity> Search(string term)
        {
            var search = new Search
            {
                Size = 10,
                Query = new Query(new MatchQuery("did_you_mean", term))
            };

            var results = _context.Search<PersonCity>(search);

            return results.PayloadResult.Hits.HitsResult.Select(t => t.Source);
        }

        public bool GetStatus()
        {
            return _context.IndexExists<PersonCity>();
        }

        /// <summary>
        /// Used for basic auto complete
        /// </summary>
        /// <param name="term"></param>
        /// <returns></returns>
        public IEnumerable<PersonCity> QueryString(string term)
        {
            var results = _context.Search<PersonCity>(BuildQueryStringSearch(term));

            return results.PayloadResult.Hits.HitsResult.Select(t => t.Source);
        }

        public void CreateTestData()
        {
            PersonCityData.CreateTestData();

            foreach (var item in PersonCityData.Data)
            {
                _context.AddUpdateDocument(item, item.Id);
            }

            _context.SaveChanges();
        }

        /// <summary>
        /// TODO protect against injection!
        /// </summary>
        /// <param name="term"></param>
        /// <returns></returns>
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
    }
}