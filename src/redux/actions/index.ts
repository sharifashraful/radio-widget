import {
  SET_STATION_LIST,
  SET_SELECTED_STATION,
  RESET_SELECTED_STATION
} from "../../constants"
import {
  RadioStationList,
  RadioStation
} from "../../@types/reducerType";

export const setRadioStationList = (stationList: RadioStationList) => {
  return {
    type: SET_STATION_LIST,
    stationList: stationList
  };
}

export const setSelectedStation = (radioStation: RadioStation) => {
  return {
    type: SET_SELECTED_STATION,
    selectedStation: radioStation
  };
}

export const resetSelectedStation = () => {
  return {
    type: RESET_SELECTED_STATION,
    selectedStation: null
  };
}

