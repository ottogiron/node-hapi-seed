import {Tire} from './tire';
import {Inject} from 'di';

@Inject(Tire)
export class Car {
  constructor(tire) {
      this.tire = tire;
  }

  start() {
     this.tire.roll();
  }
}
