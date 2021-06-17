import React, { memo } from "react";
import LogoutIcon from "../../../assets/images/switch.png";
import styles from "./LogoutButton.module.css";

interface Props {
	logout: () => void;
}

// For Unit Testing Purpose
const customAttributes = {
	entity: "logout-button"
}

const LogoutButton: React.FC<Props> = (props: Props) => {
	return(
		<button {...customAttributes} onClick={props.logout} className={styles.logoutButton} >
			<img height="42" src={LogoutIcon} alt="Logout"  />
		</button>
	)
}

export default memo(LogoutButton);