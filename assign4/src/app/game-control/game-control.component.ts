import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

timer = null;
c = 0;
@Output() onStart = new EventEmitter<number>();

fireStart() {
  this.fireStop();
  this.timer = setInterval(() => { 
    this.c++;
    this.onStart.emit(this.c);
    //console.log(this.c);
  }, 1000);
}

fireStop() {
  if (this.timer) {
    clearInterval(this.timer);
  }
}



}