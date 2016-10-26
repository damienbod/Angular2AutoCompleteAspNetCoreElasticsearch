import { PersonCity } from '../model/personCity';

export class PersonCitySearchResult {
    public PersonCities: PersonCity[];
    public hits: number;
    public took: string;
}