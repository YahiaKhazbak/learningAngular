import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  evenEvents = [];
  oddEvents = [];
  public nextNumber: number;

  displayEvent(e: number) {
    e % 2 === 0 ? this.evenEvents.push(e) : this.oddEvents.push(e);
  };
}
