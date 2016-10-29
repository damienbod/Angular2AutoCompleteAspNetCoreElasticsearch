import { PersonCity } from '../model/personCity';

export class PersonCitySearchResult {
    public personCities: PersonCity[];
    public hits: number;
    public took: string;
}