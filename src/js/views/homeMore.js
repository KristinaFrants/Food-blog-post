import React from "react";
import { Link } from "react-router-dom";
import "./homeMore.css";
import Button from "react-bootstrap/Button";

export const HomeMore = () => {
	return (
		<div className="row homeMore__container">
			<div className="col-4 ">
				<img className="homeMore__img" src="https://m.media-amazon.com/images/I/51xhnZUwqxL.jpg" />
			</div>
			<div className="col-7 homeMore__text">
				<i>
					<h3 className="homeMore__header">Our New Book</h3>
				</i>
				<hr />
				<p className="homeMore__paragraph">
					Easy Healthy Recipes For The Every Home. Eat better and healthier with Salad cookbook organized by
					month, and featuring one recipe for each day. Very helpful for beginner salad maker. This cookbook
					will teach you how to use the food in the best possible way
				</p>
				<div className="homeMore__link">
					<a href="https://www.amazon.com/Delicious-Salad-Recipes-Ingredients-Decisions-ebook/dp/B06XTWJ9D2/ref=sr_1_fkmr0_1?dchild=1&keywords=eva+atkins+cook+easy+salad+recipes&qid=1606939148&sr=8-1-fkmr0">
						More
					</a>
				</div>
			</div>
		</div>
	);
};
