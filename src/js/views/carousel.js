import React from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.scss";
import { Carousel, Container } from "react-bootstrap";
import PropTypes from "prop-types";
import YouTube from "@u-wave/react-youtube";
import { Link } from "react-router-dom";
import { HomeBlog } from "./homeBlog";

export const Carousely = () => (
	<div>
		<div
			className="jumbotron h-100 mb-2 mt-3"
			style={{
				backgroundImage:
					"url(https://images.pexels.com/photos/1145976/pexels-photo-1145976.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940)",
				backgroundRepeat: "no-repeat",
				border: "solid rgb(175, 175, 175) 2px"
			}}>
			<h1 className="display-4" style={{ color: "black", textAlign: "left" }}>
				The 10 Most Popular Recipes of April 2020
			</h1>
			<p className="lead" style={{ color: "black", margin: "1% 0% 1% 0% " }}>
				From comforting carbs and creamy casseroles, to recipes that repurpose leftovers and use up every last
				bit of our sourdough starter
			</p>

			<a style={{ color: "pink", margin: "5% 5% 1% 75% " }} className="btn btn-dark btn-lg" href="" role="button">
				Explore
			</a>
		</div>

		<div
			style={{
				height: "400px",
				boxShadow: "0px 14px 80px rgba(34, 35, 58, 0.2)",
				width: "90%",
				padding: "25px",
				// borderRadius: "2px",
				// border: "solid black 2px",
				background: "#fff",
				margin: "4% 2% 1% 5%"
			}}
			className="row blog-slider">
			<div className=" blog-slider__img">
				<img
					style={{
						width: "300px",
						height: "300px",
						marginTop: "5%",
						border: "solid rgb(175, 175, 175) 2px",
						transform: "translateX(-60px) "
					}}
					src="https://images.unsplash.com/photo-1543362906-acfc16c67564?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1402&q=80"
					alt=""
				/>
			</div>
			<div className=" col blog-slider__content">
				<span
					style={{
						color: "#7b7992",
						marginBottom: "15px",
						display: "block",
						fontWeight: "500"
					}}
					className="blog-slider__code">
					26 December 2019
				</span>
				<div className="blog-slider__title">Lorem Ipsum Dolor</div>
				<div style={{ marginBottom: "20%" }} className="blog-slider__text">
					Lorem ipsum dolor sit amet consectetur, adipisicing elit. Recusandae voluptate repellendus magni
					illo ea animi?{" "}
				</div>
				<Link
					to="#"
					style={{
						padding: "15px 35px",
						borderRadius: "50px",
						color: "black",
						textDecoration: "none",
						fontWeight: "500",
						justifyContent: "center",
						letterpacing: "1px",
						backgroundColor: "grey",
						marginLeft: "70%"
					}}
					className="blog-slider__button">
					READ MORE
				</Link>
			</div>

			<div className="blog-slider__pagination" />
		</div>
		<div className=" col mb-4 ">
			<hr style={{ border: "2px solid d3bec0c9", marginTop: "3%" }} />
			<h3 style={{ color: "grey", marginLeft: "2%", fontFamily: "Sofia" }}>LATEST VIDEO //</h3>
			<hr style={{ border: "2px solid d3bec0c9" }} />
		</div>

		<div className="row mx-auto">
			<div
				style={{
					border: "2px solid white",
					height: "400px",
					width: "380px",
					padding: "1%",
					boxShadow: "0px 3px 9px 1px rgba(0, 10, 20, 0.2)"
				}}
				className="col ml-4">
				<YouTube
					style={{
						width: "380px",
						height: "200px",
						marginLeft: "3%"
					}}
					video="rGADATPA8K0"
					autoplay
				/>
				<p className="text-video p-3 mt-2">
					Garlic Butter Shrimp is tasty, spicy, and delicious. It makes a great appetizer before dinner or to
					serve at a party, but but can also be the perfect main dish!
				</p>
			</div>
			<div
				style={{
					border: "2px solid white",
					height: "400px",
					width: "380px",
					padding: "1%",
					border: "2px solid white",
					boxShadow: "0px 3px 9px 1px rgba(0, 10, 20, 0.2)"
				}}
				className="col ml-2">
				<YouTube style={{ width: "380px", height: "200px", marginLeft: "3%" }} video="HFuE0rqBO1w" autoplay />
				<p className="text-video p-3 mt-2">
					Were mindful of how the current coronavirus outbreak might be affecting your access to stores and
					general grocery items. Please know that many of these videos were filmed before the outbreak and
					additional new videos
				</p>
			</div>
			<div
				style={{
					border: "2px solid white",
					height: "400px",
					width: "380px",
					padding: "1%",
					border: "2px solid white",

					boxShadow: "0px 3px 9px 1px rgba(0, 10, 20, 0.2)"
				}}
				className="col ml-2 mr-4">
				<YouTube style={{ width: "380px", height: "200px", marginLeft: "3%" }} video="avVvRY6HbMw" autoplay />
				<p className="text-video mt-2 p-3">
					You are trying to eat a little healthier after Christmas but still want something good to snack on
					in front of a movie this weekend, right?
				</p>
			</div>
		</div>
		<HomeBlog />
	</div>
);
