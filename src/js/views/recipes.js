import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";
import { Card } from "./card.js";
import { RecipeShow } from "./recipe-show";

export const Recipes = props => {
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
						"url(https://res.cloudinary.com/div5hqtbd/image/upload/v1590437028/foodpic_abi0y4.png)",
					marginTop: "3%",
					backgroundRepeat: "no-repeat",
					backgroundSize: "100%"
				}}>
				<h1 className="display-4" style={{ color: "black" }}>
					DISCOVER OUR RECIPES
				</h1>
				{/* <p className="lead" style={{ color: "white" }}/> */}
				{/* <a className="btn btn-dark btn-lg" href="" role="button">
					Explore
				</a> */}
			</div>
			<div>
				<hr style={{ marginTop: "3%", border: "1px solid rgb(39, 39, 39)" }} />
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
								image={recipe.image}
								// {store.peopleImages[index].urlImg}
								name={recipe.name}
								servings={recipe.servings}
								description={recipe.description}
								cooktime={recipe.cooktime}
								cooktips={recipe.cooktips}
								ingridients={recipe.ingridients}
							/>
					  ))}
			</div>
		</div>
	);
};
