import { Observable } from 'rxjs/Observable';
import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { SearchDataService } from '../services/searchDataService';
import { PersonCity } from '../model/personCity';
import { PersonCitySearchResult } from '../model/personCitySearchResult';
import { PersoncitysearchComponent } from '../personcitysearch/personcitysearch.component';

@Component({
    selector: 'homesearchcomponent',
    templateUrl: 'homesearch.component.html',
    providers: [SearchDataService]
})

export class HomeSearchComponent implements OnInit {

    public message: string;
    public PersonCitySearchData: PersonCitySearchResult;
    public SelectedTerm: string;
    public IndexExists: boolean = false;

    public ShowPaging: boolean = false;
    public CurrentPage: number = 0;
    public TotalHits: number = 0;
    public PagesCount: number = 0;
    public Pages: number[] = [];

    constructor(private _dataService: SearchDataService, private _personcitysearchComponent: PersoncitysearchComponent) {
        this.message = 'Hello from HomeSearchComponent constructor';
        this.SelectedTerm = 'none';
        this.PersonCitySearchData = new PersonCitySearchResult();
    }

    public onTermSelectedEvent(term: string) {
        this.SelectedTerm = term;
        this.findDataForSearchTerm(term, 0);
    }

    private findDataForSearchTerm(term: string, from: number) {
        console.log('findDataForSearchTerm:' + term);
        this._dataService.FindAllForTerm(term, from)
            .subscribe((data) => {
                console.log(data);
                this.PersonCitySearchData = data;
                this.configurePagingDisplay(this.PersonCitySearchData.hits);
            },
            error => console.log(error),
            () => {
                console.log('PersonCitySearch:findDataForSearchTerm completed');
            }
            );
    }

    ngOnInit() {
        this._dataService
            .IndexExists()
            .subscribe(data => this.IndexExists = data,
            error => console.log(error),
            () => console.log('Get IndexExists complete'));
    }

    public LoadDataForPage(page: number) {
        let from = page * 10;
        this.findDataForSearchTerm(this.SelectedTerm, from);
        this.CurrentPage = page;
    }

    public NextPage() {
        let page = this.CurrentPage;
        console.log('TotalHits' + this.TotalHits + 'NextPage: ' + ((this.CurrentPage + 1) * 10) + 'CurrentPage' + this.CurrentPage );

        if (this.TotalHits > ((this.CurrentPage + 1) * 10)) {
            page = this.CurrentPage + 1;
        }

        this.LoadDataForPage(page);
    }

    public PreviousPage() {
        let page = this.CurrentPage;

        if (this.CurrentPage > 0) {
            page = this.CurrentPage - 1;
        }

        this.LoadDataForPage(page);
    }

    private configurePagingDisplay(hits: number) {
        this.PagesCount = Math.floor(hits / 10);

        this.Pages = [];
        for (let i = 0; i <= this.PagesCount; i++) {
            this.Pages.push((i));
        }

        this.TotalHits = hits;

        if (this.PagesCount <= 1) {
            this.ShowPaging = false;
        } else {
            this.ShowPaging = true;
        }
    }
}