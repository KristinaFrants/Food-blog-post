import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";
import { Card } from "./card.js";

export const Planets = props => {
	const { store, actions } = useContext(Context);
	const [selected, setSelected] = useState(false);
	const handleClick = (e, ind) => {
		setSelected(!selected);
		actions.toggleFavorite(ind);
	};
	// console.log(store.planets);
	return (
		<div className="  w-100 mx-auto" style={{}}>
			<div
				className="jumbotron mb-2"
				style={{
					backgroundImage:
						"url(https://images.unsplash.com/photo-1523049673857-eb18f1d7b578?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80)",
					marginTop: "3%"
				}}>
				<h1 className="display-4" style={{ color: "white" }}>
					DISCOVER OUR RECIPES
				</h1>
				{/* <p className="lead" style={{ color: "white" }}/> */}
				<a className="btn btn-dark btn-lg" href="" role="button">
					Explore
				</a>
			</div>
			<div>
				<hr style={{ border: "1px solid rgb(39, 39, 39)" }} />
				<h3 style={{ color: "grey", marginLeft: "1%", fontFamily: "Candal" }}>Recipes//</h3>
				<hr style={{ border: "1px solid rgb(39, 39, 39" }} />
			</div>
			<div className="row">
				{!store.recipes
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
					  ))}
			</div>
		</div>
	);
};
