export interface RadioStation {
  stationName: string;
  frequency: number;
  stationId: string;
}

export type RadioStationList = RadioStation[];

export interface RadioStationState {
  stationList: RadioStationList;
  selectedStation?: RadioStation
}

export interface AppState {
  radio: RadioStationState
}
