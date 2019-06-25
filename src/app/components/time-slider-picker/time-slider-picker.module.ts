import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TimeSliderPickerComponent } from './time-slider-picker.component';

@NgModule({
  declarations: [TimeSliderPickerComponent],
  imports: [ CommonModule ],
  exports: [TimeSliderPickerComponent],
  providers: [],
})
export class TimeSliderPickerModule {}
