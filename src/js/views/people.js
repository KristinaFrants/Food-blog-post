import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { Card } from "./card.js";

export const People = props => {
	const { store, actions } = useContext(Context);

	return (
		<div className="jumbotron row w-100 mx-auto">
			{/* {store.people.length > 0 && */}
			{!store.people
				? "loading"
				: store.people.map((person, index) => (
						<Card
							key={index}
							ind={index}
							name={person.name}
							hair={person.hair_color}
							gender={person.gender}
							skin={person.skin_color}
						/>
				  ))}
		</div>
	);
};
