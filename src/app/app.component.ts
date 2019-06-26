import { Component, OnInit } from '@angular/core';
import { TSPTimeInterval } from './components/time-slider-picker/time-slider-picker.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements  OnInit {
  timeInterval: TSPTimeInterval;
  config: { timeInterval: TSPTimeInterval; };
  ngOnInit(): void {
    this.timeInterval = {
      startTime: { hours: 7, minutes: 0, seconds: 0 },
      endTime: { hours: 17, minutes: 30, seconds: 0 },
      stepBy: 30
    };

    this.config = {timeInterval: this.timeInterval};
  }

}
