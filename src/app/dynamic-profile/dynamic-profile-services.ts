import { Injectable }              from '@angular/core';
import {Http, Response, URLSearchParams}          from '@angular/http';
import {Observable} from 'rxjs/Rx';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import {URLS} from "../URLS";

@Injectable()
export class DynamicProfileServices {
  private getProfileObservable: Observable<Object>;
  private getRecentNewsObservable: Observable<Object>;

  constructor(private http: Http) {
  }

  getRecentPosts(entityId): Observable<Object[]> {
    let params = new URLSearchParams();
    params.set('entityId', entityId);
    if (!this.getRecentNewsObservable) {
      this.getRecentNewsObservable = this.http.get(URLS.RECENT_POST_URL, {search: params})
        .map(this.extractData)
        .catch(this.handleError)
        .share();
    }
    return this.getRecentNewsObservable;
  }

  getRecentNews(entityId): Observable<Object[]> {
    let params = new URLSearchParams();
    params.set('entityId', entityId);
    if (!this.getRecentNewsObservable) {
      this.getRecentNewsObservable = this.http.get(URLS.RECENT_NEWS_URL, {search: params})
        .map(this.extractData)
        .catch(this.handleError)
        .share();
    }
    return this.getRecentNewsObservable;
  }

  getProfile(entityId): Observable<Object> {
    let params = new URLSearchParams();
    params.set('entityId', entityId);
    if (!this.getProfileObservable) {
      this.getProfileObservable = this.http.get(URLS.PROFILE_URL, {search: params})
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
