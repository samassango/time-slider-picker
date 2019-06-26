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
