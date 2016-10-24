import { Component, Inject, EventEmitter, Input, Output, OnInit, AfterViewInit, ElementRef } from '@angular/core';
import { Http, Response } from "@angular/http";

import { Subscription } from 'rxjs/Subscription';
import { Observable } from 'rxjs/Observable';
import { Router } from  '@angular/router';

import { Configuration } from '../app.constants';
import { PersoncityautocompleteDataService } from './personcityautocompleteService';
import { PersonCity } from '../model/personCity';

import { CompleterService, CompleterItem } from 'ng2-completer';

@Component({
    selector: 'personcityautocomplete',
  template: `
<ng2-completer [dataService]="dataService" (selected)="onPersonCitySelected($event)" [minSearchLength]="0" [disableInput]="disableAutocomplete"></ng2-completer>

`,
  styles: [String(require('./personcityautocomplete.component.scss'))]
})
    
export class PersoncityautocompleteComponent implements OnInit    {

    constructor(private completerService: CompleterService, private http: Http, private _configuration: Configuration) {

        this.dataService = new PersoncityautocompleteDataService(http, _configuration); ////completerService.local("name, info, familyName", 'name');
    }

    @Output() bindModelPersonCityChange = new EventEmitter<PersonCity>();
    @Input() bindModelPersonCity: PersonCity;
    @Input() disableAutocomplete: boolean = false;

    private searchStr: string;
    private dataService: PersoncityautocompleteDataService;

    ngOnInit() {
        console.log("ngOnInit PersoncityautocompleteComponent");
    }

    public onPersonCitySelected(selected: CompleterItem) {
        console.log(selected);
        this.bindModelPersonCityChange.emit(selected.originalObject);
    }
}
