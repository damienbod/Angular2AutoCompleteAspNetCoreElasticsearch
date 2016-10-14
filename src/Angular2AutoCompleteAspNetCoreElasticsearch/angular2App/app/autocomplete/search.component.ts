import { Component, Inject, EventEmitter, Input, Output, OnInit, AfterViewInit, ElementRef } from '@angular/core';
import { Http, Response } from "@angular/http";

import { Subscription } from 'rxjs/Subscription';
import { Observable } from 'rxjs/Observable';
import { Router } from  '@angular/router';

import { Configuration } from '../app.constants';
import { PersonCityDataService } from './personCityDataService';
import { PersonCity } from './personCity';

import { CompleterService, CompleterItem } from 'ng2-completer';

@Component({
    selector: 'autocompletesearch',
  template: `
<ng2-completer [dataService]="dataService" (selected)="onPersonCitySelected($event)" [minSearchLength]="0" ></ng2-completer>

`,
  styles: [String(require('./search.component.scss'))]
})
    
export class AutocompleteSearchComponent implements OnInit    {

    constructor(private completerService: CompleterService, private http: Http, private _configuration: Configuration) {

        let actionUrl = _configuration.Server + 'api/personcity/search/';
        this.dataService = new PersonCityDataService(http, _configuration); ////completerService.local("name, info, familyName", 'name');
    }

    @Output() bindModelPersonCityChange = new EventEmitter<PersonCity>();
    @Input() bindModelPersonCity: PersonCity;

    private searchStr: string;
    private dataService: PersonCityDataService;

    ngOnInit() {
        console.log("ngOnInit AutocompleteSearch");
    }

    public onPersonCitySelected(selected: CompleterItem) {
        console.log(selected);
        this.bindModelPersonCityChange.emit(selected.originalObject);
    }
}
