import { Observable } from 'rxjs/Observable';
import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';

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
    public SelectedTerm: string;
    public IndexExists: boolean = false;

    constructor(private _dataService: SearchDataService, private _personcitysearchComponent: PersoncitysearchComponent) {
        this.message = "Hello from HomeSearchComponent constructor";
        this.SelectedTerm = "none";
        this._personcitysearchComponent.bindSelectedTermChange.subscribe(item => this.OnSelectedTermChanged(item));
    }

    public CreateTestData() {
        this._dataService.CreateTestData().subscribe(data => data,
            error => console.log(error),
            () => console.log('CreateTestData complete'));
    }

    public CreateIndex() {
        if (!this.IndexExists) {
            this._dataService.CreateIndex().subscribe(data => data,
                error => console.log(error),
                () => console.log('CreateIndex complete'));

            this.IndexExists = true;
        }
    }

    public OnSelectedTermChanged(term: string) {
        this.findDataForSearchTerm(term)
    }

    private findDataForSearchTerm(term: string) {
        this._dataService.FindAllForTerm(term)
            .subscribe((data) => {
                this.PersonCityItems = data;
            },
            error => console.log(error),
            () => {
                console.log('PersonCitySearch:GetAll completed');
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