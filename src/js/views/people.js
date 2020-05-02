import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { Card } from "./card.js";
import { Carousely } from "./carousel";
import PropTypes from "prop-types";

export const People = props => {
	const { store, actions } = useContext(Context);

	return (
		<div className=" row " style={{ backgroundImage: "url()" }}>
			<div className="block w-100">
				<Carousely />
			</div>
			<div className=" col ">
				<hr style={{ border: "1px solid rgb(39, 39, 39" }} />
				<h3 style={{ color: "grey", marginLeft: "2%", fontFamily: "Candal" }}>DISCOVER OUR HEROES //</h3>
				<hr style={{ border: "1px solid rgb(39, 39, 39" }} />
			</div>

			<div className=" row w-100 mb-5" style={{ backgroundImage: "url()" }}>
				{/* {!store.recipes
					? "loading"
					: store.recipes.map((recipe, index) => (
							<Card
								key={index}
								ind={index}
								image={recipe.thumbnail_url}
								// {store.peopleImages[index].urlImg}
								name={recipe.slug}
								hair={recipe.description}
								gender={recipe.brand}
								skin={recipe.promotion}
							/>
					  ))} */}
			</div>
		</div>
	);
};
