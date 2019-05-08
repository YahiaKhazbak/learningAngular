import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  makeVisible = true;
  allClicks = [];
  c = 0;

  onToogleBtn() {
    this.makeVisible === true ? this.makeVisible = false : this.makeVisible = true;
    this.c = this.c+1;
    //this.c+1;
    console.log(this.allClicks);
    console.log(this.c);
    this.allClicks.push(this.c);
  }

  
}
