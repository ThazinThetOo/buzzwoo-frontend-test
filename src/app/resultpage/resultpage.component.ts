import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppService } from './../app.service';
@Component({
  selector: 'app-resultpage',
  templateUrl: './resultpage.component.html',
  styleUrls: ['./resultpage.component.scss']
})
export class ResultpageComponent implements OnInit {
  public data: questionInfo[] = [];
  score = 0;
  constructor(public router: Router,
    private appService: AppService) { }

  ngOnInit(): void {
    this.data = this.appService.getArray();
    if(this.data && this.data.length > 0) {
      for(let item of this.data) {
        if(item.selected == item.correct_answer) {
          if(!item.time_out) { 
              if(item.difficulty === 'easy') {
                this.score += 2;
              }
              if(item.difficulty === 'medium') {
                this.score += 4;
              } 
              if(item.difficulty === 'hard') {
                this.score += 6;
              }
          } else {
              if(item.difficulty === 'easy') {
                this.score += 1;
              }
              if(item.difficulty === 'medium') {
                this.score += 2;
              } 
              if(item.difficulty === 'hard') {
                this.score += 3;
              }
          }
            
        }
      }
    }
  }

  gotolanding(){
    this.router.navigate(['']);
  }
}
export interface questionInfo {
  category: string;
  type: string;
  difficulty: string;
  question: string;
  correct_answer: any;
  incorrect_answers: any[];
  all_answer: any;
  selected: string;
  time_out: boolean;
}
