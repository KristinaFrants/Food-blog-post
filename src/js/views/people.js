import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { Card } from "./card.js";
import { Carousely } from "./carousel";

export const People = props => {
	const { store, actions } = useContext(Context);

	return (
		<div
			className=" row "
			style={{ backgroundImage: "url(https://media.giphy.com/media/TxVVB6PfWMjE4/giphy.gif)" }}>
			<div className="block w-100">
				<Carousely />
			</div>
			{/* {store.people.length > 0 && */}
			<div
				className="jumbotron row w-100 mx-auto"
				style={{ backgroundImage: "url(https://media.giphy.com/media/TxVVB6PfWMjE4/giphy.gif)" }}>
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
		</div>
	);
};
