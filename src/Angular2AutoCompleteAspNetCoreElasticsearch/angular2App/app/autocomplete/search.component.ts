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

`
})


export class AutocompleteSearchComponent implements OnInit {

    @Input() data: any;


    ngOnInit() {
        console.log("ngOnInit AutocompleteSearch");
        console.log(this.data);

       // Plotly.newPlot('myPlotlyDiv', this.data, this.layout, this.options);
    }
}
