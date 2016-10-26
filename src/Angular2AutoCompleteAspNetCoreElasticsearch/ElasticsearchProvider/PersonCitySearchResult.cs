using System;
using System.Collections.Generic;

namespace SearchComponent
{
    public class PersonCitySearchResult
    {
        public IEnumerable<PersonCity> PersonCities { get; set; }

        public long Hits { get; set; }

        public long Took { get; set; }
    }
}
