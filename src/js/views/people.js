import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { Card } from "./card.js";
import { Carousely } from "./carousel";
import PropTypes from "prop-types";

export const People = props => {
	const { store, actions } = useContext(Context);

	return (
		<div
			className=" row "
			style={{ backgroundImage: "url(https://media.giphy.com/media/TxVVB6PfWMjE4/giphy.gif)" }}>
			<div className="block w-100">
				<Carousely />
			</div>
			<div className=" col ">
				<hr style={{ border: "1px solid rgb(39, 39, 39" }} />
				<h3 style={{ color: "grey", marginLeft: "2%", fontFamily: "Candal" }}>DISCOVER OUR HEROES //</h3>
				<hr style={{ border: "1px solid rgb(39, 39, 39" }} />
			</div>

			<div
				className=" row w-100 mb-5"
				style={{ backgroundImage: "url(https://media.giphy.com/media/TxVVB6PfWMjE4/giphy.gif)" }}>
				{!store.people
					? "loading"
					: store.people.map((person, index) => (
							<Card
								key={index}
								ind={index}
								image={store.peopleImages[index].urlImg}
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
