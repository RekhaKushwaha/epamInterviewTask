import { Component, Input, OnInit } from '@angular/core';
import { CounterService } from '../counter.service';

@Component({
  selector: 'app-counter-btn',
  templateUrl: './counter-btn.component.html',
  styleUrls: ['./counter-btn.component.css']
})
export class CounterBtnComponent  {

  label = 0;

  @Input()
  containerName!: string;
 

  constructor(private counterService: CounterService) { }

  onClick(): void {
    this.label = this.counterService.incrementCounter(this.containerName);
  }

  get clickCount(): number {
    return this.counterService.getCounterValue(this.containerName);
  }

}