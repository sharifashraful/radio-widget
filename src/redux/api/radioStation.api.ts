import { Dispatch } from "redux";
import {
  AppState
} from "../../@types/reducerType";
import {
	setRadioStationList,
  resetSelectedStation
} from "../actions"
// import Fetch from "./fetch";

export const fetchRadioStation = () => {

	return (dispatch: Dispatch, getState: () => AppState ) => {
    
    // State value
    // const {radio: {stationList}} = getState();
    
    return new Promise((resolve, reject) => {

        dispatch(
          setRadioStationList(
            [{
              stationName: "Putin FM",
              frequency: 666,
              stationId: "1"
            }, {
              stationName: "Dribbble FM",
              frequency: 1012,
              stationId: "2"
            }, {
              stationName: "Doge FM",
              frequency: 994,
              stationId: "3"
            }, {
              stationName: "Ballads FM",
              frequency: 871,
              stationId: "4"
            }, {
              stationName: "Maximum FM",
              frequency: 1422,
              stationId: "5"
            }]
          )
        );
        
        // Reset selected station
        dispatch(resetSelectedStation());

        return resolve(true);
    })

    /*
      const url: string = "";
      return Fetch( url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
          'Content-Encoding': 'gzip',
        }
      })
      .then((response: any) => response.json())
      .then((responseJson) => {
        if(responseJson && !responseJson.errors) {      
          dispatch(setRadioStationList(responseJson));
        }
      })
      // Globally fire error
      .catch((error) => {      
        throw new Error(error);
      });
    */

	}
}


