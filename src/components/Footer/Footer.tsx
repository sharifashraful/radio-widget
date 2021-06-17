import React, { memo } from "react";
import {
  RadioStation
} from "../../@types/reducerType";
import styles from "./Footer.module.css";

interface Props {
  selectedStation?: RadioStation
}

const Footer: React.FC<Props> = (props: Props) => {
  const {selectedStation} = props;

  return(
    <div className={styles.fixedFooter}>
      <div className={styles.fixedFooterInner}>
        {selectedStation?(
          <>
            <div className={styles.goldColor}>CURRENTLY PLAYING</div>
            <div className={styles.selectedStationStyle}>{selectedStation?.stationName}</div>
          </>
        ) : null}				
      </div>
    </div>	
  )
}

export default memo(Footer);
