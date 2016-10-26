import { Observable } from 'rxjs/Observable';
import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';

import { SearchDataService } from '../services/searchDataService';
import { PersonCity } from '../model/personCity';
import { PersonCitySearchResult } from '../model/personCitySearchResult';
import { PersoncitysearchComponent } from '../personcitysearch/personcitysearch.component';

@Component({
    selector: 'homesearchcomponent',
    templateUrl: 'homesearch.component.html',
    providers: [SearchDataService]
})

export class HomeSearchComponent implements OnInit {

    public message: string;
    public PersonCitySearchData: PersonCitySearchResult;
    public SelectedTerm: string;
    public IndexExists: boolean = false;

    constructor(private _dataService: SearchDataService, private _personcitysearchComponent: PersoncitysearchComponent) {
        this.message = "Hello from HomeSearchComponent constructor";
        this.SelectedTerm = "none";
        this.PersonCitySearchData = new PersonCitySearchResult();
    }

    public onTermSelectedEvent(term: string) {
        this.SelectedTerm = term;
        this.findDataForSearchTerm(term)
    }

    private findDataForSearchTerm(term: string) {
        console.log("findDataForSearchTerm:" + term);
        this._dataService.FindAllForTerm(term)
            .subscribe((data) => {
                console.log(data)
                this.PersonCitySearchData = data;
            },
            error => console.log(error),
            () => {
                console.log('PersonCitySearch:findDataForSearchTerm completed');
            }
            );
    }

    ngOnInit() {
        this._dataService
            .IndexExists()
            .subscribe(data => this.IndexExists = data,
            error => console.log(error),
            () => console.log('Get IndexExists complete'));
    }
}