import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.scss']
})
export class TimerComponent implements OnInit {
  time: number = 0;
  display :any;
  interval :any;
  pausedisable:boolean=false;
  disable:boolean=false;
  constructor() { }

  ngOnInit() {
  }


 startTimer() {
  this.disable=true;
    console.log("=====>");
    this.interval = setInterval(() => {
      if (this.time === 0) {
        this.time++;
      } else {
        this.time++;
      }
      this.display=this.transform( this.time)
    }, 1000);
  }
transform(value: number): string {
           const minutes: number = Math.floor(value / 60);
           return minutes + ':' + (value - minutes * 60);
      }
  pauseTimer() {
    this.disable=false;
    clearInterval(this.interval);
  }
  stopTimer() {
    this.disable=true;
    this.pausedisable=true;
    clearInterval(this.interval);
  }
  resetTimer(){
    this.disable=false;
    this.pausedisable=false;
    this.time = 0;
    this.display=this.transform( this.time)
    clearInterval(this.interval);
    
  }
}
