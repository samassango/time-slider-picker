import { Component, OnInit, forwardRef, Input, OnDestroy } from "@angular/core";
import {
  ControlValueAccessor,
  Validators,
  NG_VALUE_ACCESSOR,
  NG_VALIDATORS
} from "@angular/forms";
import * as moment from "moment";

import { TSPTimeInterval } from "./time-slider-picker.model";

@Component({
  selector: "time-slider-picker",
  templateUrl: "./time-slider-picker.component.html",
  styleUrls: ["./time-slider-picker.component.scss"],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => TimeSliderPickerComponent),
      multi: true
    },
    {
      provide: NG_VALIDATORS,
      multi: true,
      useExisting: forwardRef(() => TimeSliderPickerComponent)
    }
  ]
})
export class TimeSliderPickerComponent<TimeSliderPickerConfig>
  implements OnInit, ControlValueAccessor, Validators, OnDestroy {
  isDisabled: boolean;
  timeInterval: TSPTimeInterval;
  timeIntervalList: string[];
  styleMouseOver: {
    width?: string;
    backgroundColor?: string;
    margin?: string;
  };

  @Input() set config(config: TimeSliderPickerConfig) {}

  onChange: (_: any) => {};

  onTouch: (_: boolean) => {};

  writeValue(obj: any): void {}

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouch = fn;
  }

  setDisabledState?(isDisabled: boolean): void {
    this.isDisabled = isDisabled;
  }

  ngOnDestroy(): void {}

  constructor() {}

  ngOnInit(): void {
    this.timeInterval = {
      startTime: { hours: 7, minutes: 0, seconds: 0 },
      endTime: { hours: 17, minutes: 30, seconds: 0 },
      stepBy: 30
    };

    this.timeIntervalList = this.covertTimeIntervalToTimeList();
    console.log("timeIntervalList", this.timeIntervalList);
  }
  selectedTime(item: string, i: number) {
    console.log(item);
   // this.onChange(item);
  }
  mouseOverEventHandler(i) {
    this.styleMouseOver = { backgroundColor: '#cebd24' };
  }
  covertTimeIntervalToTimeList() {
    const newTimeInterval = [];
    const startTimeInterval = moment(this.timeInterval.startTime);
    // const endTimeInterval = moment(this.timeInterval.endTime);
    const stepByInterval = this.timeInterval.stepBy;
    let nextTime = moment(startTimeInterval);
    while (
      nextTime.hour() <= this.timeInterval.endTime.hours
      // && nextTime.minute() <= this.timeInterval.endTime.minutes
    ) {
      newTimeInterval.push(
        moment(nextTime)
          .format(moment.HTML5_FMT.TIME)
          .toString()
      );
      nextTime = moment(nextTime).add(stepByInterval, 'minutes');
      console.log("nextTime", nextTime);
    }
    return newTimeInterval;
  }
}
