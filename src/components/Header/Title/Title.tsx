import React, { memo } from "react";
import styles from "./Title.module.css";

interface Props {
	title: string;
}

const Title: React.FC<Props> = (props: Props) => {
	return(
		<div className={styles.title}>
			{ props.title.toLocaleUpperCase()}
		</div>
	)
}

export default memo(Title);