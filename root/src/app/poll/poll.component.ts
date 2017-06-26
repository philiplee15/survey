import { Component, OnInit } from '@angular/core';
import { RootService } from './../root.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-poll',
  templateUrl: './poll.component.html',
  styleUrls: ['./poll.component.css']
})
export class PollComponent implements OnInit {
  allPolls: any = [];
  currentUser: any = "";
  constructor(private _rootService: RootService, private _router: Router) {
    _rootService.getPolls()
    .then(data=>{
      console.log(data);
      this.allPolls=data;
    })
    .catch(err=>{
      console.log(err);
    });
    this._rootService.getCurrentUser()
    .then(data=>{
      console.log(data);
      this.currentUser=data;
    })
    .catch(err=>console.log(err));
  }

  ngOnInit() {
  }
  logout() {
    this._rootService.logoutService()
    .then(data=>{
      console.log("Logging out to home page");
      this._router.navigate(['']);
    })
    .catch(err=>{console.log(err)})
  }
  delete(qid) {
    console.log(qid);
    this._rootService.removeQuestion(qid)
    .then(data=>{
      this._rootService.getPolls()
      .then(data=>{
        console.log(data);
        this.allPolls=data;
      })
      .catch(err=>{
        console.log(err);
      });
    })
    .catch(err=>{console.log(err);})
  }
  questionRoute(qid) {
    this._router.navigate(['/poll/'+qid]);
  }
}
