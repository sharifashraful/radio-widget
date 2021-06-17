import React, { memo } from "react";
import {
  RadioStation
} from "../../@types/reducerType";
import styles from "./Container.module.css";
import RadioPic from "../../assets/images/radio-pic.png";
import MinusIcon from "../../assets/images/minus.png";
import PinusIcon from "../../assets/images/plus.png";

interface Props {
	radioStation?: RadioStation
}

const Container: React.FC<Props> = (props: Props) => {

	const handleMinus = () => {alert("decrease");};
	const handlePlus = () => {alert("increase");};

	return(
		<div className={styles.container}>
			<div className={styles.playerContainer}>
				<button onClick={handleMinus} className={styles.minusButton}>
					<img src={MinusIcon} alt="minus" />
				</button>
				<img src={RadioPic} alt="radio pic" />
				<button onClick={handlePlus} className={styles.plusButton}>
					<img src={PinusIcon} alt="plus" />
				</button>
			</div>			
		</div>	
	)
}

export default memo(Container);
