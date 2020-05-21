import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { Card } from "./card.js";
import PropTypes from "prop-types";

export const RecipeShow = props => {
	const { store, actions } = useContext(Context);

	return (
		<div className=" text-center">
			<div className="col-6">{props.description}</div>
		</div>
	);
};
RecipeShow.propTypes = {
	description: PropTypes.string
};
