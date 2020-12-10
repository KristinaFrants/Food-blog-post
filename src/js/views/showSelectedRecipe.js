import React, { useContext } from "react";
import "./showSelectedRecipe.css";

export const RecipeContent = props => {
	return (
		<div>
			<div>
				<i>
					<h1
						className="mt-3"
						style={{
							textAlign: "center",
							fontSize: "60px",
							border: "1px solid rgb(179, 180, 179)",
							marginRight: "3%",
							marginLeft: "3%",
							padding: "3%"
						}}>
						Find the Best Book for your Needs
					</h1>
				</i>
				<hr />
			</div>
			<div className="recipeContent__container row">
				<div className="recipeContent__card col">
					<div className="face face1">
						<div className="recipeContent__content">
							<img src="https://m.media-amazon.com/images/I/51xhnZUwqxL.jpg" />
							<h3>Vegan Recipes</h3>
						</div>
					</div>

					<div className="face face2">
						<div className="recipeContent__content">
							<p>
								Very helpful for beginner salad maker. This cookbook will teach you how to use the food
								in the best possible way just in 3 steps.
							</p>
							<a href="https://www.amazon.com/Delicious-Salad-Recipes-Ingredients-Decisions-ebook/dp/B06XTWJ9D2/ref=sr_1_1?dchild=1&keywords=31+salad+recipe+eva+atkins&qid=1607451466&s=books&sr=1-1">
								Read More
							</a>
						</div>
					</div>
				</div>
				<div className="recipeContent__card recipeContent__card2 col">
					<div className="face face1">
						<div className="recipeContent__content">
							<img src="https://m.media-amazon.com/images/I/51woUa0N0dL.jpg" />
							<h3>Healthy Detox</h3>
						</div>
					</div>
					<div className="face face2">
						<div className="recipeContent__content">
							<p>
								You will find out here the best smoothie recipes for every day for the whole month! Book
								tells you how to prepare them properly and how helpful they are to your body.
							</p>
							<a href="https://www.amazon.com/Healthy-Smoothie-Recipes-weight-quickly-ebook/dp/B01MQKPBVQ/ref=sr_1_3?dchild=1&qid=1607451476&refinements=p_27%3AEva+Atkins&s=digital-text&sr=1-3&text=Eva+Atkins">
								Read More
							</a>
						</div>
					</div>
				</div>
				<div className="recipeContent__card recipeContent__card3 col">
					<div className="face face1">
						<div className="recipeContent__content">
							<img src="https://m.media-amazon.com/images/I/51zhosExdfL.jpg" />
							<h3>Hollydays Yummy</h3>
						</div>
					</div>
					<div className="face face2">
						<div className="recipeContent__content">
							<p>
								This cookbook is a great help for busy moms, simply open the page and prepare ordinary
								chicken into an <i>A La Carte</i> meal and be sure your family will love it!
							</p>
							<a href="https://www.amazon.com/Yummy-Chicken-recipes-Easy-peasy-delicious-ebook/dp/B01MXXTOQU/ref=sr_1_1?dchild=1&qid=1607451476&refinements=p_27%3AEva+Atkins&s=digital-text&sr=1-1&text=Eva+Atkins">
								Read More
							</a>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
