import { Observable } from 'rxjs/Observable';
import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';

import { PersoncityautocompleteComponent } from '../personcityautocomplete/personcityautocomplete.component';
import { SearchDataService } from '../services/searchDataService';
import { PersonCity } from '../model/personCity';

@Component({
    selector: 'homecomponent',
    templateUrl: 'home.component.html',
    providers: [SearchDataService]
})

export class HomeComponent implements OnInit {

    public message: string;
    public PersonCityItems: any[];
    public SelectedPersonCity: PersonCity;
    public IndexExists = false;
    public CreateIndexDisabled = false;

    constructor(private _dataService: SearchDataService) {
        this.message = 'Hello from HomeComponent constructor';
        this.SelectedPersonCity = new PersonCity();
    }

    public CreateTestData() {
        this._dataService.CreateTestData().subscribe(
            error => console.log(error),
            () => console.log('CreateTestData complete'));
    }

    public CreateIndex() {
        this.CreateIndexDisabled = true;
        if (!this.IndexExists) {
            this._dataService.CreateIndex().subscribe(
                error => console.log(error),
                () => {
                    console.log('CreateIndex complete');
                    this.IndexExists = true;
                    this.CreateIndexDisabled = false;
                });
        }
    }

    ngOnInit() {
        this._dataService
            .IndexExists()
            .subscribe(data => this.IndexExists = data,
            error => console.log(error),
            () => console.log('IndexExists complete'));
    }
}