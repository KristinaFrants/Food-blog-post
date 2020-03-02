import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { Card } from "./card.js";

export const People = props => {
	const { store, actions } = useContext(Context);
	return (
		<div className="jumbotron row w-100 mx-auto">
			{store.people.length > 0 &&
				store.people.map((person, index) => (
					<Card key={index} data={person} /> //image={store.people[index].urlImg}
				))}
		</div>
	);
};
