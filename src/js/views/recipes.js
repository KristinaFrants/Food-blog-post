import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";
import { CardRecipe } from "./card.js";
import "./card.css";
import { RecipeContent } from "./showSelectedRecipe";

export const Recipes = props => {
	const { store, actions } = useContext(Context);
	const [selected, setSelected] = useState(false);
	const handleClick = (e, ind) => {
		setSelected(!selected);
		actions.toggleFavorite(ind);
	};
	// console.log(store.planets);
	return (
		<div className="  w-100 mx-auto">
			<div>
				<i>
					<h1
						className="mt-4"
						style={{
							textAlign: "center",
							marginBottom: "3%",
							fontSize: "80px",
							border: "1px solid rgb(179, 180, 179)",
							marginRight: "3%",
							marginLeft: "3%",
							padding: "3%"
						}}>
						Discover Our Recipes
					</h1>
				</i>
				<hr />
			</div>

			<div className="row">
				<div className="card__recipes col">
					{!store.recipes
						? "loading"
						: store.recipes.map((recipe, index) => (
								<CardRecipe
									key={index}
									ind={index}
									id={recipe.id}
									image={recipe.image}
									// {store.peopleImages[index].urlImg}
									name={recipe.name}
									servings={recipe.servings}
									description={recipe.description}
									cooktime={recipe.cooktime}
									cooktips={recipe.cooktips}
								/>
						  ))}
				</div>
			</div>
			<RecipeContent />
		</div>
	);
};
