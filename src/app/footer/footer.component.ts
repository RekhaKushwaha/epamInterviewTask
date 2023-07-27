import { Component, OnInit } from '@angular/core';
import { CounterService } from '../counter.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'],
})
export class FooterComponent {
  constructor(private counterService: CounterService) {}

  get backgroundColor(): string {
    const clickCount = this.counterService.getCounterValue('footer');
    return clickCount >= 10 ? 'red' : 'transparent';
  }
}
