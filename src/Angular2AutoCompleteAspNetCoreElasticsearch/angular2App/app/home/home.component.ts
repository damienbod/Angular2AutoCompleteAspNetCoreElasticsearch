import { Observable } from 'rxjs/Observable';
import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';

import { PersonCityAutocompleteSearchComponent } from '../autocomplete/personCityAutocompleteSearch.component';
import { SearchDataService } from '../services/searchDataService';
import { PersonCity } from '../autocomplete/personCity';

import { SearchComponent } from '../searchcomponent/search.component';

@Component({
    selector: 'homecomponent',
    template: require('./home.component.html'),
    providers: [SearchDataService]
})

export class HomeComponent implements OnInit {

    public message: string;
    public PersonCityItems: any[];
    public SelectedPersonCity: PersonCity;
    public IndexExists: boolean = false;;

    constructor(private _dataService: SearchDataService) {
        this.message = "Hello from HomeComponent constructor";
        this.SelectedPersonCity = new PersonCity();
    }

    public CreateTestData() {
        this._dataService.CreateTestData().subscribe(data => data,
            error => console.log(error),
            () => console.log('Get all complete'));
    }

    public CreateIndex() {
        if (!this.IndexExists) {
            this._dataService.CreateIndex().subscribe(data => data,
                error => console.log(error),
                () => console.log('Get all complete'));

            this.IndexExists = true;
        }      
    }

    ngOnInit() {
        this._dataService
            .IndexExists()
            .subscribe(data => this.IndexExists = data,
            error => console.log(error),
            () => console.log('Get all complete'));
    }
}