import { Component, Inject, EventEmitter, Input, Output, OnInit, AfterViewInit, ElementRef } from '@angular/core';


import { Subscription } from 'rxjs/Subscription';
import { Observable } from 'rxjs/Observable';
import { Router } from  '@angular/router';

import { SearchDataService } from '../autocomplete/searchDataService';


import { CompleterService, CompleterData } from 'ng2-completer';

@Component({
    selector: 'autocompletesearch',
  template: `
<ng2-completer [(ngModel)]="searchStr" [dataService]="dataService" [minSearchLength]="0"></ng2-completer>

`
})


export class AutocompleteSearchComponent implements OnInit    {

    constructor(private completerService: CompleterService) {
        this.dataService = completerService.local(this.searchData, 'color', 'color');
    }

    @Input() data: any;

    private searchStr: string;
    private dataService: CompleterData;
    private searchData = [
        { color: 'red', value: '#f00' },
        { color: 'green', value: '#0f0' },
        { color: 'blue', value: '#00f' },
        { color: 'cyan', value: '#0ff' },
        { color: 'magenta', value: '#f0f' },
        { color: 'yellow', value: '#ff0' },
        { color: 'black', value: '#000' }
    ];

    ngOnInit() {
        console.log("ngOnInit AutocompleteSearch");
        console.log(this.searchData);

    }



}
