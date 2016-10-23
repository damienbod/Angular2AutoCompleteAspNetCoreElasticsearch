import { Component, Inject, EventEmitter, Input, Output, OnInit, AfterViewInit, ElementRef } from '@angular/core';
import { Http, Response } from "@angular/http";

import { Subscription } from 'rxjs/Subscription';
import { Observable } from 'rxjs/Observable';
import { Router } from  '@angular/router';

import { Configuration } from '../app.constants';
import { SearchDataService } from './searchComponentDataService';
import { PersonCity } from '../autocomplete/personCity';

import { CompleterService, CompleterItem } from 'ng2-completer';

@Component({
    selector: 'search',
  template: `
<ng2-completer [dataService]="dataService" (selected)="onPersonCitySelected($event)" [minSearchLength]="0" [disableInput]="disableAutocomplete"></ng2-completer>

`,
  styles: [String(require('./search.component.scss'))]
})
    
export class SearchComponent implements OnInit    {

    constructor(private completerService: CompleterService, private http: Http, private _configuration: Configuration) {

        this.dataService = new SearchDataService(http, _configuration);
    }

    @Output() bindModelPersonCitiesChange = new EventEmitter<PersonCity[]>();
    @Input() disableAutocomplete: boolean = false;

    private searchStr: string;
    private dataService: SearchDataService;

    ngOnInit() {
        console.log("ngOnInit SearchComponent");
    }

    public onPersonCitySelected(selected: CompleterItem) {
        console.log(selected);

        this.dataService
            .FindAllForTerm(selected.title)
            .subscribe(
            data => this.bindModelPersonCitiesChange.emit(data),
            error => console.log(error),
            () => console.log('onPersonCitySelected complete')
            );

    }
}
