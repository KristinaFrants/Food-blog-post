import React from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.scss";
import { Carousel, Container } from "react-bootstrap";
import PropTypes from "prop-types";
import YouTube from "@u-wave/react-youtube";
import { Link } from "react-router-dom";
import { HomeBlog } from "./homeBlog";

let JumboStyles = {
	// borderStyle: "15px solid white",
	height: "500px",
	width: "100%",
	marginLeft: "auto",
	marginRight: "auto",
	marginBottom: "4%",
	borderRadius: "5px",
	// boxShadow: " 0px 15px 30px -5px #3e4244",
	marginTop: "2%"
};

let Caption = {
	color: "black",
	fontSize: "15px"
};

export const Carousely = () => (
	<div>
		<div
			className="jumbotron h-100 mb-2 mt-3"
			style={{
				backgroundImage:
					"url(https://images.pexels.com/photos/775033/pexels-photo-775033.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940)",
				backgroundRepeat: "no-repeat",
				border: "solid black 2px"
			}}>
			<h1 className="display-4" style={{ color: "black", textAlign: "center" }}>
				The 10 Most Popular Recipes of April 2020
			</h1>
			<p className="lead" style={{ color: "black", textAlign: "center", margin: "1% 0% 1% 0% " }}>
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
				borderRadius: "2px",
				border: "solid black 2px",
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

		{/* <Carousel style={JumboStyles} className="ourfont">
			<Carousel.Item>
				<img
					style={{ height: "500px" }}
					className="d-block w-100"
					src="https://images.pexels.com/photos/139259/pexels-photo-139259.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940
                    
                    
                   "
					//
					alt="First slide"
				/>
				<Carousel.Caption style={Caption}>
					<h1 style={{ color: "black", marginBottom: "25%", fontFamily: "Candal" }}>A Healthy Start</h1>
				</Carousel.Caption>
			</Carousel.Item>
			<Carousel.Item>
				<img
					style={{ height: "500px" }}
					className="d-block w-100"
					src=" https://images.pexels.com/photos/3429784/pexels-photo-3429784.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940
                    "
					alt="Third slide"
				/>

				<Carousel.Caption style={Caption}>
					<h3 style={{ color: "Black", marginBottom: "25%", fontFamily: "Candal" }}>Clean Eating</h3>
				</Carousel.Caption>
			</Carousel.Item>
			<Carousel.Item>
				<img
					style={{ height: "500px" }}
					className=" d-block w-100 "
					src="https://images.pexels.com/photos/2171077/pexels-photo-2171077.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940
                   "
				/>

				<Carousel.Caption style={Caption}>
					<h3 />
				</Carousel.Caption>
			</Carousel.Item>
		</Carousel> */}
		{/* <div
			className="jumbotron h-100 mb-2"
			style={{
				backgroundImage:
					"url(https://images.pexels.com/photos/1128678/pexels-photo-1128678.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940)",
				backgroundRepeat: "no-repeat"
			}}>
			<h1 className="display-4" style={{ color: "black" }}>
				The 10 Most Popular Recipes of April 2020
			</h1>
			<p className="lead" style={{ color: "black" }}>
				From comforting carbs and creamy casseroles, to recipes that repurpose leftovers and use up every last
				bit of our sourdough starter
			</p>

			<a style={{ color: "pink" }} className="btn btn-dark btn-lg" href="" role="button">
				Explore
			</a>
		</div> */}
		<div className=" col ">
			<hr style={{ border: "1px solid rgb(39, 39, 39)", marginTop: "3%" }} />
			<h3 style={{ color: "grey", marginLeft: "2%", fontFamily: "Sofia" }}>LATEST VIDEO //</h3>
			<hr style={{ border: "1px solid rgb(39, 39, 39" }} />
		</div>

		<div style={{ backgroundColor: "#d3bec0c9" }} className="row mx-auto">
			<div
				style={{
					border: "2px solid white",
					height: "400px",
					boxShadow: "0px 3px 9px 1px rgba(0, 10, 20, 0.2)"
				}}
				className="col ml-4">
				<YouTube
					style={{
						width: "200px",
						height: "200px",
						border: "2px solid"
					}}
					video="HFuE0rqBO1w"
					autoplay
				/>
			</div>
			<div
				style={{
					border: "2px solid white",
					height: "400px",
					border: "2px solid white",
					height: "400px",
					boxShadow: "0px 3px 9px 1px rgba(0, 10, 20, 0.2)"
				}}
				className="col ml-2">
				<YouTube style={{ width: "200px", height: "200px" }} video="HFuE0rqBO1w" autoplay />
			</div>
			<div
				style={{
					border: "2px solid white",
					height: "400px",
					border: "2px solid white",
					height: "400px",
					boxShadow: "0px 3px 9px 1px rgba(0, 10, 20, 0.2)"
				}}
				className="col ml-2 mr-4">
				<YouTube style={{ width: "400px", height: "200px" }} video="avVvRY6HbMw" autoplay />
				<h3>A Healthier Movie Night Snack Platter</h3>
				<p>
					You are trying to eat a little healthier after Christmas but still want something good to snack on
					in front of a movie this weekend, right?
				</p>
			</div>
		</div>
		<HomeBlog />
	</div>
);
