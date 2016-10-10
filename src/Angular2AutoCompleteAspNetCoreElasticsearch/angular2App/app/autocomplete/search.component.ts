import { Component, EventEmitter, Input, Output, OnInit, ElementRef} from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { Observable } from 'rxjs/Observable';
import { Router } from  '@angular/router';

declare var Plotly: any;

@Component({
    selector: 'autocompletesearch',
  template: `
<div style="margin-bottom:100px;">
    todo
</div>

<div *ngIf="displayRawData">
    raw data:
    <hr />
    <span>{{data | json}}</span>
    <hr />
    layout:
    <hr />
    <span>{{layout | json}}</span>
    <hr />
</div>
`
})


export class AutocompleteSearchComponent implements OnInit {

    @Input() data: any;
    @Input() layout: any;
    @Input() options: any;
    @Input() displayRawData: boolean;

    ngOnInit() {
        console.log("ngOnInit AutocompleteSearch");
        console.log(this.data);
        console.log(this.layout);

       // Plotly.newPlot('myPlotlyDiv', this.data, this.layout, this.options);
    }
}
