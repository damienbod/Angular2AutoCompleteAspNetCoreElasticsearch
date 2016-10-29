import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

// AoT compilation doesn't support 'require'.
import './app.component.scss';
import '../style/app.scss';

@Component({
    selector: 'my-app',
    templateUrl: 'app.component.html'
})


export class AppComponent {

    constructor(private router: Router) {
    }
}