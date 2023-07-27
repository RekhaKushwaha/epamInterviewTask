import { Component, OnInit } from '@angular/core';
import { CounterService } from '../counter.service';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.css'],
})
export class SideNavComponent {
  constructor(private counterService: CounterService) {}
  get backgroundColor(): string {
    const clickCount = this.counterService.getCounterValue('sideNav');
    return clickCount >= 10 ? 'red' : 'transparent';
  }
}
