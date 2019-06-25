import { Component, OnInit, forwardRef, Input, OnDestroy } from "@angular/core";
import {
  ControlValueAccessor,
  Validators,
  NG_VALUE_ACCESSOR,
  NG_VALIDATORS
} from "@angular/forms";
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

  ngOnDestroy(): void {
  }

  constructor() {}

  ngOnInit(): void {}
}
