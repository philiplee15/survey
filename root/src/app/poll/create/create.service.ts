import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs';

@Injectable()
export class CreateService {

  constructor(private _http:Http) { }
  pollRequestToServer(value){
        return this._http.post('/addPoll', value).map(response=>response.json()).toPromise();
  }
}
