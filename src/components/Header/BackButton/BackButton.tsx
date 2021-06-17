import React, { memo } from "react";
import BackIcon from "../../../assets/images/back-arrow.png"
import styles from "./BackButton.module.css"

interface Props {
  goBack: () => void
}

// For Unit Testing Purpose
const customAttributes = {
  entity: "back-button"
}

const BackButton: React.FC<Props> = (props: Props) => {

  return(
    <button {...customAttributes} onClick={props.goBack} className={styles.backButton}>
      <img height="42" src={BackIcon} alt="back button"  />
    </button>
  )
}

export default memo(BackButton);
