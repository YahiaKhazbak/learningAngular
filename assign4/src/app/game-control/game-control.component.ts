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

 // @Output() onStart = new EventEmitter();
//  fireStartEvent() { this.onStart.emit() }

  fireStartEvent() { 
   // this.onStart.emit();
    console.log('x');
    // setInterval(function() {
    //   this.onStart.emit();
    //   console.log('x');
    // }, 1000)
  }




}