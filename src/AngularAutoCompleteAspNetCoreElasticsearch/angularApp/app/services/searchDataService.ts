import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
import { Configuration } from '../app.constants';

@Injectable()
export class SearchDataService {

    private actionUrl: string;
    private headers: Headers;

    constructor(private _http: Http, private _configuration: Configuration) {

        this.actionUrl = _configuration.Server + 'api/personcity/';

        this.headers = new Headers();
        this.headers.append('Content-Type', 'application/json');
        this.headers.append('Accept', 'application/json');
    }

    public GetAll = (): Observable<any> => {
        return this._http.get(this.actionUrl).map((response: Response) => <any>response.json());

    }

    public CreateIndex = (): Observable<Response> => {
        let url = this.actionUrl + 'createindex';
        return this._http.get(url).map((response: Response) => <any>response.json());
    }

    public IndexExists = (): Observable<any> => {
        let url = this.actionUrl + 'indexexists';
        return this._http.get(url).map((response: Response) => <any>response.json());
    }

    public CreateTestData = (): Observable<any> => {
        let url = this.actionUrl + 'createtestdata';
        return this._http.get(url).map((response: Response) => <any>response.json());
    }

    public FindAllForTerm = (term: string, from: number): Observable<any> => {
        return this._http.get(this.actionUrl + 'search/' + from + '/' + term).map((response: Response) => <any>response.json());
    }
}