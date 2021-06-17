import React from "react";
import Title from "./Title";
import BackButton from "./BackButton";
import LogoutButton from "./LogoutButton";
import styles from "./Header.module.css";
import { WithAsProps, RsRefForwardingComponent } from '../../@types/common';

interface HeaderComponent extends RsRefForwardingComponent<'div', HeaderProps> {
	Title: typeof Title;
	BackButton: typeof BackButton;
	LogoutButton: typeof LogoutButton;
}

interface HeaderProps extends WithAsProps {
	
}

const defaultProps: Partial<HeaderProps> = {
	as: 'div'
};

const Header: HeaderComponent = (props: HeaderProps) => {	
	let totalChilds = React.Children.count(props.children)
	if(totalChilds !== 3) {
		throw new Error("Need 3 childs in Header Component");
	}
	
	const {  as: Component = "div", ...rest } = props;
	
	return(
		<div className={styles.fixedHeader}>
			<Component {...rest} className={styles.fixedHeaderInner} />
		</div>
	)
}

Header.Title = Title;
Header.BackButton = BackButton;
Header.LogoutButton = LogoutButton;
Header.defaultProps = defaultProps;

export default Header;