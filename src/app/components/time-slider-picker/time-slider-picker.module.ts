import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TimeSliderPickerComponent } from './time-slider-picker.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [TimeSliderPickerComponent],
  imports: [ CommonModule, ReactiveFormsModule ],
  exports: [TimeSliderPickerComponent],
  providers: [],
})
export class TimeSliderPickerModule {}
