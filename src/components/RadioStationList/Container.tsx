import React, { useEffect, memo } from "react";
import RadioStationListItem from "../RadioStationListItem";
import {
  RadioStationList,
  RadioStation
} from "../../@types/reducerType";
import styles from "./Container.module.css";

type Props = {
  radioStationList: RadioStationList,
  getStationList: () => void,
  selectedStation?: RadioStation,
  setSelectedStation: (station: RadioStation) => void,
  resetSelectedStation: () => void
}

const Container: React.FC<Props> = (props: Props) => {
  const {
    radioStationList,
    getStationList,
    selectedStation,
    setSelectedStation,
    resetSelectedStation
  } = props	
  const refresh = ()=> {
    getStationList();
  }
  const onStationSelected = (station: RadioStation) => {
    if(station.stationId === selectedStation?.stationId) {
      resetSelectedStation();
    } else {
      setSelectedStation(station);
    }		
  }

  // First time refresh
  useEffect(refresh, []);

  return(
    <div className={styles.container}>
      {
        radioStationList && radioStationList.map((ratioStation, index) => {

          return(
            <RadioStationListItem 
              key={"radion-station-" + index}
              radioStation={ratioStation}
              isLastItem={radioStationList.length === (index + 1)}
              onStationSelected={onStationSelected}
              isSelected={ratioStation.stationId === selectedStation?.stationId}
            />
          )
        })
      }
    </div>    
  )
}

export default memo(Container);
