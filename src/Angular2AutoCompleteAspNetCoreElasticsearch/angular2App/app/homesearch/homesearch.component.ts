import { Observable } from 'rxjs/Observable';
import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';

import { PersoncityautocompleteComponent } from '../personcityautocomplete/personcityautocomplete.component';
import { SearchDataService } from '../services/searchDataService';
import { PersonCity } from '../model/personCity';

import { PersoncitysearchComponent } from '../personcitysearch/personcitysearch.component';

@Component({
    selector: 'homesearchcomponent',
    template: require('./homesearch.component.html'),
    providers: [SearchDataService]
})

export class HomeSearchComponent implements OnInit {

    public message: string;
    public PersonCityItems: any[];
    public SelectedPersonCity: PersonCity;
    public IndexExists: boolean = false;

    constructor(private _dataService: SearchDataService) {
        this.message = "Hello from HomeSearchComponent constructor";
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