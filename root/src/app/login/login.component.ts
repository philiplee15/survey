import { Component, OnInit} from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { RootService } from './../root.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user = {username:""};
  errors: string[] = [];
  constructor(private _rootService: RootService, private _router: Router) { }

  ngOnInit() {
  }
  onSubmit() {
    this._rootService.login(this.user)
    .then(data=> {
      var arr = [];
      if(data.errors) {
        for(var key in data.errors){
          arr.push(data.errors[key].message);
          this.errors = arr;
        }
      }else {
        console.log("login success");
        this._router.navigate(['/dashboard']);
      }
    })
    .catch(err=>{
      console.log(err);
    })
  }
}
