export interface TimeSliderPickerConfig {
  timeInterval: TSPTimeInterval;
}

export interface TSPTimeKeys {
  hours: number;
  minutes: number;
  seconds: number;
}
export interface TSPTimeInterval {
  startTime: TSPTimeKeys;
  endTime: TSPTimeKeys;
  stepBy:number;
}

export class TimeModel {
  time: string;
  selectedTime?: boolean;
  currentTime?: boolean;
  constructor(timeInterval: string, selectedTime?: boolean, currentTime?: boolean){
   this.time = timeInterval;
   this.currentTime = currentTime;
   this.selectedTime = selectedTime;
  }
}
