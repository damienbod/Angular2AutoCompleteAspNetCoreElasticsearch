import { NgModule } from '@angular/core';
import { CommonModule }   from '@angular/common';
import { FormsModule }    from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }  from './app.component';
import { Configuration } from './app.constants';
import { routing } from './app.routes';
import { HttpModule, JsonpModule } from '@angular/http';
import { HomeComponent } from './home/home.component';

import { Ng2CompleterModule } from "ng2-completer";
import { PersoncityautocompleteComponent } from './personcityautocomplete/personcityautocomplete.component';
import { PersoncitysearchComponent } from './personcitysearch/personcitysearch.component';
import { SearchDataService } from './services/searchDataService';

@NgModule({
    imports: [
        BrowserModule,
        CommonModule,
        Ng2CompleterModule,
        FormsModule,
        routing,
        HttpModule,
        JsonpModule
    ],
    declarations: [
        AppComponent,
        HomeComponent,
        PersoncityautocompleteComponent,
        PersoncitysearchComponent
    ],
    providers: [
        SearchDataService,
        Configuration
    ],
    bootstrap:    [AppComponent],
})

export class AppModule {}