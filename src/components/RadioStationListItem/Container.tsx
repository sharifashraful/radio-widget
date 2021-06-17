import React, { memo } from "react";
import RadioPlayer from "../RadioPlayer";
import {
  RadioStation
} from "../../@types/reducerType";
import styles from "./Container.module.css";

interface Props {
  radioStation: RadioStation,
  isLastItem?: boolean,
  onStationSelected: (station: RadioStation) => void,
  isSelected?: boolean
}

const Container: React.FC<Props> = (props: Props) => {
  const {stationName, frequency} = props.radioStation;
  const {radioStation, isLastItem, onStationSelected, isSelected} = props;
  const handleStationSelection = () => {
    onStationSelected(radioStation);
  }
  const formatFrequency = (frequency: string): string => {
    var numLength: number = frequency.length;
    return frequency.substring(0, numLength-1) + "," + frequency.substring(numLength-1);
  }

  return(
    <div className={styles.container} >
      {
        isSelected? (
          <RadioPlayer />
        ) : null
      }
      <div onClick={handleStationSelection} className={styles.containerItem + " " + (isLastItem?styles.noBorder : "")}>
        <div>
          {stationName}
        </div>
        <div className={styles.frequency}>
          {formatFrequency(frequency.toString())}
        </div>       
      </div>
    </div>
  )
}

export default memo(Container);
