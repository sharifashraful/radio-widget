import { AnyAction } from "redux";
import {
  RadioStationState
} from "../../@types/reducerType";
import {
  SET_STATION_LIST,
  SET_SELECTED_STATION,
  RESET_SELECTED_STATION
} from "../../constants";

let initialRadioStationList: RadioStationState = {
  stationList: [{
    stationName: "Putin FM",
    frequency: 666,
    stationId: "1"
  }]
}

const applyRadioStationList = (state: RadioStationState, action: AnyAction) => {
  const { stationList } = action;
  return {
    ...state,
    stationList: stationList
  }
}

const applySelectedStation = (state: RadioStationState, action: AnyAction) => {
  const { selectedStation } = action;
  return {
    ...state,
    selectedStation: selectedStation
  }
}

const resetSelectedStation = (state: RadioStationState, action: AnyAction) => {
  const { selectedStation } = action;
  return {
    ...state,
    selectedStation: selectedStation
  }
}

export default function radioStationReducer(
  state: RadioStationState = initialRadioStationList,
  action: AnyAction
) : RadioStationState {  
  switch (action.type) {
    case SET_STATION_LIST:
      return applyRadioStationList(state, action);
    case SET_SELECTED_STATION:
      return applySelectedStation(state, action);
    case RESET_SELECTED_STATION:
      return resetSelectedStation(state, action);
    default:
      return state;
  }
}
