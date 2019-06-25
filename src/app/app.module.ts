import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TimeSliderPickerModule } from './components/time-slider-picker/time-slider-picker.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    TimeSliderPickerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
