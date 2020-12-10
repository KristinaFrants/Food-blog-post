import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { Card } from "./card.js";
import { Carousely } from "./carousel";
import PropTypes from "prop-types";

export const Home = props => {
	const { store, actions } = useContext(Context);

	return (
		<div className=" row " style={{ backgroundImage: "url()" }}>
			<div className="block w-100">
				<Carousely />
			</div>
			<div className=" row w-100 mb-5" style={{ backgroundImage: "url()" }} />
		</div>
	);
};
