import { Component, Inject, EventEmitter, Input, Output, OnInit, AfterViewInit, ElementRef } from '@angular/core';
import { Http, Response } from "@angular/http";

import { Subscription } from 'rxjs/Subscription';
import { Observable } from 'rxjs/Observable';
import { Router } from  '@angular/router';

import { Configuration } from '../app.constants';
import { PersonCityData } from './personCityData';

import { CompleterService } from 'ng2-completer';

@Component({
    selector: 'autocompletesearch',
  template: `
<ng2-completer [(ngModel)]="searchStr" [dataService]="dataService" [minSearchLength]="0"></ng2-completer>

`
})


export class AutocompleteSearchComponent implements OnInit    {

    constructor(private completerService: CompleterService, private http: Http, private _configuration: Configuration) {

        let actionUrl = _configuration.Server + 'api/personcity/search/';
        this.dataService = new PersonCityData(http, _configuration); ////completerService.local("name, info, familyName", 'name');
    }

    @Input() data: any;

    private searchStr: string;
    private dataService: PersonCityData;

    ngOnInit() {
        console.log("ngOnInit AutocompleteSearch");
    }



}
