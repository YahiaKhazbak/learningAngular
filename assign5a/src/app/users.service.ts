import { Injectable } from '@angular/core';
import { CounterService } from './counter.service';

@Injectable()

export class UsersService {

    activationClick: number = 0;
    deactivationClick: number = 0;

    constructor(private counterService: CounterService) {}

    activeUsers = ['Max', 'Anna'];
    inactiveUsers = ['Chris', 'Manu'];

    setToActive(id: number) {
        this.activeUsers.push(this.inactiveUsers[id]);
        this.inactiveUsers.splice(id, 1);
        this.counterService.countActivation();
    }

    setToUnactive(id: number) {
        this.inactiveUsers.push(this.activeUsers[id]);
        this.activeUsers.splice(id, 1);
        this.counterService.countDeactivation();
    }
}