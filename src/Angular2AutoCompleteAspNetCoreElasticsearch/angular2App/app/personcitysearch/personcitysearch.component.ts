import { Component, Inject, EventEmitter, Input, Output, OnInit, AfterViewInit, ElementRef } from '@angular/core';
import { Http, Response } from '@angular/http';

import { Subscription } from 'rxjs/Subscription';
import { Observable } from 'rxjs/Observable';
import { Router } from  '@angular/router';

import { Configuration } from '../app.constants';
import { PersoncitysearchService } from './personcitysearchService';
import { PersonCity } from '../model/personCity';

import { CompleterService, CompleterItem } from 'ng2-completer';
import './personcitysearch.component.scss';

@Component({
    selector: 'personcitysearch',
  template: `
<ng2-completer [dataService]='dataService' (selected)='onTermSelected($event)' [minSearchLength]='0' [disableInput]='disableAutocomplete'></ng2-completer>

`
})

export class PersoncitysearchComponent implements OnInit {

    @Output() onTermSelectedEvent = new EventEmitter<string>();
    @Input() bindSelectedTerm: string;

    @Input() disableAutocomplete: boolean = false;

    private searchStr: string;
    private dataService: PersoncitysearchService;

    constructor(private completerService: CompleterService, private http: Http, private _configuration: Configuration) {

        this.dataService = new PersoncitysearchService(http, _configuration);
    }

    ngOnInit() {
        console.log('ngOnInit SearchComponent');
    }

    public onTermSelected(selected: CompleterItem) {
        console.log('onTermSelected');
        console.log(selected);

        this.onTermSelectedEvent.emit(selected.title);
    }
}
