import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-odd',
  templateUrl: './odd.component.html',
  styleUrls: ['./odd.component.css'],
  styles: ['div { font-weight: normal; color: blue}']
})
export class OddComponent implements OnInit {

  @Input() odd: [];

  constructor() { }
  ngOnInit() {
  }


}
