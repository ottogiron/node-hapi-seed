import {Tire} from './tire';
import {inject} from 'aurelia-dependency-injection';

@inject(Tire)
export class Car {
  constructor(tire) {
      this.tire = tire;
  }

  start() {
     this.tire.roll();
  }
}
