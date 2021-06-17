import { connect,  } from 'react-redux';
import Footer from "./Footer";
import {
  RadioStationState
} from "../../@types/reducerType";

const mapStateToProps = ({radio}: {radio: RadioStationState}) => {
  return {
    selectedStation: radio.selectedStation
  };
};

export default connect(mapStateToProps, null)(Footer);
