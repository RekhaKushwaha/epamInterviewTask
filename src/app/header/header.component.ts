import { Component, OnInit } from '@angular/core';
import { CounterService } from '../counter.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  constructor(private counterService: CounterService) {}

  get backgroundColor(): string {
    const clickCount = this.counterService.getCounterValue('header');
    return clickCount >= 10 ? 'red' : 'transparent';
  }
}
