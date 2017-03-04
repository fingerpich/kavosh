import { Injectable }              from '@angular/core';
import {Http, Response, URLSearchParams}          from '@angular/http';
import {Observable} from 'rxjs/Rx';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import {URLS} from "../URLS";

@Injectable()
export class DynamicProfileServices {
  private getProfileObservable:Observable<Object>;
  constructor(private http: Http) {}

  getLastNews(): Observable<Object[]> {
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

  getProfile(entityId):Observable<Object> {
    let params = new URLSearchParams();
    params.set('entityId', entityId);
    if(!this.getProfileObservable){
      this.getProfileObservable=this.http.get(URLS.PROFILE_URL, {search: params})
        .map(this.extractData)
        .catch(this.handleError)
        .share();
    }
    return this.getProfileObservable;
    // const profileInfo={
    //   name:"Ahmad Mirzayi",
    //   desc:"he is a gentle man, he has green eyes and talks modesty"
    // };
    // return Observable.of(profileInfo);
  }

  private extractData(res: Response) {
    return res.json();
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
