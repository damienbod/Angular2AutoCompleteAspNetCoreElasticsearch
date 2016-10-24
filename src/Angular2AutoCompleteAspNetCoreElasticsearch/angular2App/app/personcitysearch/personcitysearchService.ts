import { Http, Response } from "@angular/http";
import { Subject } from "rxjs/Subject";

import { CompleterData, CompleterItem } from 'ng2-completer';
import { Configuration } from '../app.constants';
import { Observable } from 'rxjs/Observable';

export class PersoncitysearchService extends Subject<CompleterItem[]> implements CompleterData {
    constructor(private http: Http, private _configuration: Configuration) {
        super();

        this.actionUrl = _configuration.Server + 'api/personcity/autocomplete/';
    }

    private actionUrl: string;

    public search(term: string): void {
        this.http.get(this.actionUrl + term)
            .map((res: Response) => {
                // Convert the result to CompleterItem[]
                let data = res.json();
                let matches: CompleterItem[] = data.map((autocomplete: any) => {
                    return {
                        title: autocomplete,

                        originalObject: autocomplete
                    }
                });
                this.next(matches);
            })
            .subscribe();
    }

    public FindAllForTerm = (term: string): Observable<any> => {
        return this.http.get(this.actionUrl + term).map((response: Response) => <any>response.json());
    }

    public cancel() {
        // Handle cancel
    }
}