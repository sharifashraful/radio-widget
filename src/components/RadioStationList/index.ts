import { AnyAction } from "redux";
import { ThunkDispatch } from 'redux-thunk';
import { connect,  } from 'react-redux';
import Container from "./Container";
import {
  RadioStationState,
  AppState,
  RadioStation
} from "../../@types/reducerType";
import * as API from "../../redux/api/radioStation.api";
import * as ACTIONS from "../../redux/actions";

const mapStateToProps = ({radio}: {radio: RadioStationState}) => {
  return {
    radioStationList: radio.stationList,
    selectedStation: radio.selectedStation
  };
};

const mapDispatchToProps = (dispatch: ThunkDispatch<AppState, void, AnyAction>) => {
  return {
    getStationList: () => dispatch(API.fetchRadioStation()),
    setSelectedStation: (radioStation: RadioStation) => dispatch(ACTIONS.setSelectedStation(radioStation)),
    resetSelectedStation: () => dispatch(ACTIONS.resetSelectedStation()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Container);
