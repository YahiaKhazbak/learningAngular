import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  allEvents = [];
  public nextNumber: number;

  displayEvent(e: number) {
    this.nextNumber = e;
  };
}
