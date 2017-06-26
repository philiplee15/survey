import { Component, OnInit } from '@angular/core';
import { CreateService } from './create.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
  poll: any = {
    question: "",
    options: {
      opt1: "",
      opt2: "",
      opt3: "",
      opt4: "",
    }
  }
  error = [];

  constructor(private _createService: CreateService, private _router: Router) { }

  ngOnInit() {
  }
  sendPoll() {
    this.error = [];
    if (this.poll.question.length < 8){
      this.error.push("Question too short");
    }
    if(this.poll.options.opt1.length<4){
      this.error.push("Option 1 length too short.");
    }
    if(this.poll.options.opt2.length<4){
      this.error.push("Option 2 length too short.");
    }
    if(this.poll.options.opt3.length<4){
      this.error.push("Option 3 length too short.");
    }
    if(this.poll.options.opt4.length<4){
      this.error.push("Option 4 length too short.");
    }
    if(this.error.length===0){
      console.log(this.poll);
      this._createService.pollRequestToServer(this.poll)
      .then(data=>{
        this._router.navigate(['/dashboard']);
      })
      .catch(err =>{console.log(err);})
    }
  }
}
