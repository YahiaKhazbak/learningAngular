export class CounterService {
    activationClick: number = 0;
    deactivationClick: number = 0;

    countActivation() {
        this.activationClick ++;
    }

    countDeactivation() {
        this.deactivationClick ++;
    }
}