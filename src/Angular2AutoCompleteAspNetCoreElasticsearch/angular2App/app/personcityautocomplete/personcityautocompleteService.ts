import { Http, Response } from "@angular/http";
import { Subject } from "rxjs/Subject";

import { CompleterData, CompleterItem } from 'ng2-completer';
import { Configuration } from '../app.constants';

export class PersoncityautocompleteDataService extends Subject<CompleterItem[]> implements CompleterData {
    constructor(private http: Http, private _configuration: Configuration) {
        super();

        this.actionUrl = _configuration.Server + 'api/personcity/querystringsearch/';
    }

    private actionUrl: string;

    public search(term: string): void {
        this.http.get(this.actionUrl + term)
            .map((res: Response) => {
                // Convert the result to CompleterItem[]
                let data = res.json();
                let matches: CompleterItem[] = data.map((personcity: any) => {
                    return {
                        title: personcity.name,
                        description: personcity.familyName + ", " + personcity.cityCountry,
                        originalObject: personcity
                    }
                });
                this.next(matches);
            })
            .subscribe();
    }

    public cancel() {
        // Handle cancel
    }
}