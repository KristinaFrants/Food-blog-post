import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { RecipeShow } from "./recipe-show";
import PropTypes from "prop-types";

export const RecipeContent = props => {
	const { store, actions } = useContext(Context);

	return (
		<div className=" text-center">
			<div className="row">
				{!store.recipes
					? "loading"
					: store.recipes.map((recipe, index) => (
							<RecipeShow
								key={index}
								ind={index}
								// image={recipe.image}
								// {store.peopleImages[index].urlImg}
								// name={recipe.name}
								// servings={recipe.servings}
								description={recipe.description}
							/>
					  ))}
			</div>
		</div>
	);
};
RecipeShow.propTypes = {
	description: PropTypes.string
};
