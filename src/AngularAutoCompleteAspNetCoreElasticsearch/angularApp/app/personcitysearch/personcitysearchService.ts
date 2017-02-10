import { Http, Response } from '@angular/http';
import { Subject } from 'rxjs/Subject';

import { CompleterData, CompleterItem } from 'ng2-completer';
import { Configuration } from '../app.constants';
import { Observable } from 'rxjs/Observable';

export class PersoncitysearchService extends Subject<CompleterItem[]> implements CompleterData {
    private actionUrl: string;

    constructor(private http: Http, private _configuration: Configuration) {
        super();

        this.actionUrl = _configuration.Server + 'api/personcity/autocomplete/';
    }

    public search(term: string): void {
        this.http.get(this.actionUrl + term)
            .map((res: Response) => {
                // Convert the result to CompleterItem[]
                let data = res.json();
                console.log(data);
                let matches: CompleterItem[] = data.map((autocomplete: any) => {
                    return {
                        title: autocomplete,

                        originalObject: autocomplete
                    };
                });
                this.next(matches);
            })
            .subscribe();
    }

    public cancel() {
        // Handle cancel
    }
}