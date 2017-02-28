import { Injectable }              from '@angular/core';
import { Http, Response }          from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import {News} from "./last-news/news";

@Injectable()
export class DynamicProfileServices {
  private lastNewsUrl = "localhost:/onja";

  constructor(private http: Http) {
  }

  getLastNews(): Observable<News[]> {
    // return this.http.get(this.lastNewsUrl)
    //   .map(this.extractData)
    //   .catch(this.handleError);

    let list = [
      {title: "news1", summary: "news 1 is the most horror news for whole time"},
      {title: "news2", summary: "news 2 is the ..."},
      {title: "news3", summary: "news 3 is the most horror news for whole time"},
      {title: "news4", summary: "news 4 is the most horror news for whole time"},
    ];
    return Observable.of(list);
  }

  private extractData(res: Response) {
    let body = res.json();
    return body.data || {};
  }

  private handleError(error: Response | any) {
    // In a real world app, we might use a remote logging infrastructure
    let errMsg: string;
    if (error instanceof Response) {
      const body = error.json() || '';
      const err = body.error || JSON.stringify(body);
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }
    console.error(errMsg);
    return Observable.throw(errMsg);
  }
}
