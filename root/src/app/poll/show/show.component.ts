import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { RootService } from './../../root.service';

@Component({
  selector: 'app-show',
  templateUrl: './show.component.html',
  styleUrls: ['./show.component.css']
})
export class ShowComponent implements OnInit {
question: any;
param: any = "";
constructor(private _route: ActivatedRoute, private _rootService: RootService, private _router: Router) {
  this._route.params.subscribe((param)=>{
    console.log("TaskDetailsComponent loaded and url id given is: ", param.id);
    this.param = param.id;
  });
  _rootService.getQuestion(this.param)
  .then(data=>{
    console.log(data);
    this.question = data;
  })
  .catch(err=>{console.log(err);})

}


  ngOnInit() {
  }
  upvote(cid){
    this._rootService.upvoteService(cid)
    .then(data=>{
      this._rootService.getQuestion(this.param)
      .then(data=>{
        console.log(data);
        this.question = data;
      })
      .catch(err=>{console.log(err);})
    })
    .catch(err=>{console.log(err);})
  }
}
