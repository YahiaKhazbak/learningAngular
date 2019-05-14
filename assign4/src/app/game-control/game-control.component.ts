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

  c = 0;
  @Output() onStart = new EventEmitter();

  fireStartEvent() { 
    /* why c is readable but onStart is undefined? 
       they share the same scope... 
       
    setInterval(function() {
      this.c = this.c+1;
      this.onStart.emit(this.c);
      console.log(this.c)
    }, 1000)
    */
    setInterval( () => {
      this.c = this.c+1;
      this.onStart.emit(this.c);
      console.log(this.c)
    }, 4000)

  }




}