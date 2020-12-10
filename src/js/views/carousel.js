import React from "react";
import "../../styles/home.scss";
import "./carousel.css";
import PropTypes from "prop-types";
import YouTube from "@u-wave/react-youtube";
import { Link } from "react-router-dom";
import { HomeBlog } from "./homeBlog";
import { HomeMore } from "./homeMore";
import Button from "react-bootstrap/Button";

export const Carousely = () => (
	<div className="carousel__home mx-auto">
		<i>
			<h1
				className="mt-4"
				style={{
					textAlign: "center",
					marginBottom: "10%",
					fontSize: "80px",
					border: "1px solid rgb(179, 180, 179)",
					marginRight: "3%",
					marginLeft: "3%",
					padding: "3%"
				}}>
				The Simple Veganista
			</h1>
		</i>

		<div className="row container__carousel mx-auto">
			<div className="carousell__right">
				<h4>Foodie Cooking Club</h4>
				<hr />
				<p>
					Find hundreds of simple, healthy, tasty vegan recipes, from breakfast, lunch and dinner, and
					everything in between!
				</p>
				<img src="https://image.freepik.com/free-photo/top-view-green-vegetables-assortment_23-2148724965.jpg" />
				<div className="carousel__icons">
					<a href="">
						<i className="fas fa-seedling" />
					</a>
					<a href="">
						<i className="fas fa-utensils" />
					</a>
					<a href="">
						<i className="fas fa-apple-alt" />
					</a>
				</div>
				<hr />
				<div className=" carousell__rightContent ">
					<i>
						<p>
							Fermented foods are becoming more mainstream, but vegans have been enjoying their zesty
							flavor and health benefits for years. “Fermented foods have been around for ages.
						</p>
					</i>
				</div>
			</div>
			<div className="divider__carousel" />
			<div className="col carousell__left ">
				<h6>A Food Blog With Fresh, Zesty Recipes</h6>
				<hr />
				<h5>Best Recipes</h5>

				<p>
					Hi, and welcome to The Simple Veganista where youll find healthy, affordable, EASY VEGAN RECIPES
					everyone will love!
					<br />
					<Link to="./recipes">Learn More</Link>
				</p>
				<img src="https://image.freepik.com/free-photo/arrangement-fresh-green-onions_23-2148758872.jpg" />
				<hr />
				<p>
					We love to eat, travel, cook, and eat some more! We create, photograph vegetarian recipes from our
					home in Florida, while our shiba pups eat the kale stems that fall on the kitchen floor.
				</p>
				<hr />
				<div className="col-xs-4 carousel__books">
					<a href="./books">Discover Our Books</a>
				</div>
			</div>
		</div>

		{/* Youtube Videos */}
		<div className="carousel__youtube__header ">
			<i>
				<h3
					style={{
						marginTop: "3%",
						marginBottom: "3%",
						fontSize: "60px"
					}}>
					Latest Videos
				</h3>
			</i>
		</div>

		<div className="row youtube__videos mr-4 ml-4 d-flex">
			<div
				style={{
					border: "2px solid white",
					padding: "3%",
					boxShadow: "0px 3px 9px 1px rgba(0, 10, 20, 0.2)"
				}}
				className="col ml-4">
				<YouTube video="rGADATPA8K0" autoplay muted />
				<hr />
				<p className="text-video p-3 mt-2">
					Garlic Butter Shrimp is tasty, spicy, and delicious. It makes a great appetizer before dinner or to
					serve at a party, but but can also be the perfect main dish!
				</p>
			</div>
			<div
				style={{
					border: "2px solid white",
					padding: "2%",
					boxShadow: "0px 3px 9px 1px rgba(0, 10, 20, 0.2)"
				}}
				className="col ml-3 ">
				<YouTube video="HFuE0rqBO1w" autoplay muted />
				<hr />
				<p className="text-video p-3 mt-2">
					Were mindful of how the current coronavirus outbreak might be affecting your access to stores.
					Please know that many of these videos were filmed before the outbreak
				</p>
			</div>
			<div
				style={{
					border: "2px solid white",
					padding: "2%",
					border: "2px solid white",

					boxShadow: "0px 3px 9px 1px rgba(0, 10, 20, 0.2)"
				}}
				className="col ml-3 mr-2">
				<YouTube video="avVvRY6HbMw" autoplay muted />
				<hr />
				<p className="text-video mt-2 p-3">
					You are trying to eat a little healthier after Christmas but still want something good to snack on
					in front of a movie this weekend, right?
				</p>
			</div>
		</div>

		<HomeBlog />
		<HomeMore />
		<div className="carousel__foter mb-2">
			<i>
				<h1 className="carousel__foter__header ">Never Miss A Recipe</h1>
			</i>
			<div className=" carousel__foter__link">
				<Link style={{ color: "black", textDecoration: "underline overline" }} to="./recipes">
					Show More
				</Link>
			</div>
		</div>
	</div>
);
