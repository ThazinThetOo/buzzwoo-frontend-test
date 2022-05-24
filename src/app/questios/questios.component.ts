import { Component, OnInit, HostListener, ViewChild } from '@angular/core';
import { AppService } from './../app.service';
import { Router, NavigationExtras } from '@angular/router';
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { SessionModalComponent } from './modal/session.component';
import { CountdownComponent } from 'ngx-countdown';
import { ThrowStmt } from '@angular/compiler';

@Component({
  selector: 'app-questios',
  templateUrl: './questios.component.html',
  styleUrls: ['./questios.component.scss']
})
export class QuestiosComponent implements OnInit {
  @ViewChild('cd', { static: false }) private countdown: CountdownComponent;
  timerConfig = { leftTime: 20, notify: [10] }; // assume timer
  public loading = true;
  data: questionInfo[] = [];
  questionObj : any;
  currentQues : any;
  ansObj : any;
  index = 0;
  last_index = 0;
  selected: any;
  deviceWidth = 0;
  checked = false;
  left_time : number;
  

  @HostListener('window:resize',['$event'])
    onResize(event: any) {
        this.deviceWidth = window.innerWidth;  // get devicewidth for mobile responsive
    }

  constructor(private appService: AppService,
    private modalService: NgbModal,
    private router: Router) {
      this.deviceWidth = window.innerWidth;
      // console.log('device width =>' + this.deviceWidth)
     }

  ngOnInit(): void {
    this.selected = '';
    this.appService.getQuestions()
    .subscribe(res => {
      this.data = res.results;
      this.loading = false;
      // console.log('data => ' + JSON.stringify(this.data))
      this.last_index = this.data.length - 1 ;
      this.createQuestion();
    })
  }

  createQuestion(){   // implement question object
    if(this.data){
      for(let i of this.data){
        i.all_answer = i.incorrect_answers;
        i.all_answer.push(i.correct_answer);
        let array : any = [];   // Define property and value in all_answer array
              for (let d = 0; d < i.all_answer.length; d++) {
                this.ansObj = {
                  name: i.all_answer[d]
                }
                array.push(this.ansObj);
              }
              i.all_answer = array;
      }
      // console.log('data modify => ' + JSON.stringify(this.data))
      this.questionObj = this.data[this.index];
    }
  }

  handleCountDown(event: any) {   //countdown and call Modal
    // console.log(event)
    if(this.questionObj && !this.questionObj.selected) {
      if(event.action === 'notify' || event.action === 'done') {
        this.left_time = event.left;
        if(event.action === 'done') {
          
          this.questionObj.time_out = (this.questionObj && this.questionObj.selected) ? false : true;
        }
        // console.log('obj => ' + JSON.stringify(this.questionObj))
        let dialogRef = this.modalService.open(SessionModalComponent, { centered : true });
          let dialogData: any = {
              action: event.action
          };
          dialogRef.componentInstance.action = event.action;
      }
    }
  }

  gotoNextQues(){
    // this.selected = '';
    this.index = this.index + 1;
    this.questionObj = this.data[this.index];
    this.selected = this.questionObj.selected ? this.questionObj.selected : '';
    // this.countdown.restart();
    if(this.questionObj && !this.questionObj.selected) {
      this.countdown.restart();
    }
    // this.handleCountDown(event);
    // console.log('data after next click => ' + JSON.stringify(this.questionObj))
  }

  goBack(){
    this.countdown.restart();
    this.countdown.stop();
    this.index = this.index - 1;
    this.questionObj = this.data[this.index];
    this.selected = this.questionObj.selected ? this.questionObj.selected : '';
   // console.log('data after back click => ' + JSON.stringify(this.questionObj))
   //  console.log('selected after back => ' + this.selected)
  }

  gotoResult(){
    this.accept(this.data);
    this.router.navigate(['/result']);
  }

  onValueChanges(value: any){     //radio butoon changes
    this.selected = value;
    this.questionObj.selected = this.selected;
    this.data[this.index].selected = this.selected;
    // this.data[this.index].time_out = false;
    this.data[this.index].time_out = (this.left_time === 0) ? true : false;
    // console.log('time_out? ' + this.data[this.index].time_out)
 }
 
 accept(data: any){    //pass data to result component
  this.appService.setArray(data);
}
}

export interface questionInfo {
  category: string;
  type: string;
  difficulty: string;
  question: string;
  correct_answer: any;
  incorrect_answers: any[];
  all_answer: answerInfo[];
  selected: string;
  time_out: boolean;
}
export interface answerInfo {
  name: string;
}