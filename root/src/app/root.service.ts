import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs';


@Injectable()
export class RootService {

  constructor(private _http: Http) { }
  login(user) {
    return this._http.post('/login', user).map(response=>response.json()).toPromise();
  }
  logoutService() {
    return this._http.get('/logout').map(response=>response).toPromise();
  }
  getPolls(){
    return this._http.get('/getPolls').map(response=>response.json()).toPromise();
  }
  getCurrentUser() {
    return this._http.get('/currentuser').map(response=>response.json()).toPromise();
  }
  removeQuestion(qid) {
    return this._http.get('/remove/'+qid).map(response=>response.json()).toPromise();
  }
  getQuestion(qid) {
    return this._http.get('/getQ/'+qid).map(response=>response.json()).toPromise();
  }
  upvoteService(cid) {
    return this._http.get('/upvote/'+cid).map(response=>response.json()).toPromise();
  }
}
