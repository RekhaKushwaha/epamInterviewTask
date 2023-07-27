import { Component, OnInit } from '@angular/core';
import { CounterService } from '../counter.service';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css'],
})
export class ContentComponent {
  constructor(private counterService: CounterService) {}

  get backgroundColor(): string {
    const clickCount = this.counterService.getCounterValue('content');
    return clickCount >= 10 ? 'red' : 'transparent';
  }
}
