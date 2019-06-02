import { Component, OnInit } from '@angular/core';
import { UsersService } from './users.service';
import { CounterService } from './counter.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [UsersService]
})
export class AppComponent implements OnInit{
  
  activeUsers: string[];
  inactiveUsers: string[];

  activationClick: number = 0;
  deactivationClick: number = 0;

  constructor(private usersService: UsersService, 
              private counterService: CounterService) {}

  ngOnInit() {
    this.activeUsers = this.usersService.activeUsers;
    this.inactiveUsers = this.usersService.inactiveUsers;
  }

  onSetToActive(id: number) {
    this.usersService.setToActive(id);
    this.activationClick = this.counterService.activationClick;
  }

  onSetToInactive(id: number) {
    this.usersService.setToUnactive(id);
    this.deactivationClick = this.counterService.deactivationClick;
}

}
