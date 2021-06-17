import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import RadioStationList from "../../components/RadioStationList";

type Props = {}

const RadioScreen: React.FC<Props> = (props: Props) => {

	const goBack = () => {
		alert("go back..")
	}

	const logout = () => {
		alert("logout")
	}
	
	return(
		<div>
			<Header>
				<Header.Title title="Stations" />
				<Header.LogoutButton logout={logout} />
				<Header.BackButton goBack={goBack} />
			</Header>
			<RadioStationList />
			<Footer />
		</div>
	);
}

export default RadioScreen;
