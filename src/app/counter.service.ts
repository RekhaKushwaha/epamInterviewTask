import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CounterService {
  private counters: { [containerName: string]: number } = {};

  constructor() {}

  incrementCounter(containerName: string): number {
    if (!this.counters[containerName]) {
      this.counters[containerName] = 0;
    }

    this.counters[containerName]++;

    return this.counters[containerName];
  }

  getCounterValue(containerName: string): number {
    return this.counters[containerName] || 0;
  }
}
