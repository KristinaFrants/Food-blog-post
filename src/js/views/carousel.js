import React from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.scss";
import { Carousel, Container } from "react-bootstrap";
import PropTypes from "prop-types";

let JumboStyles = {
	// borderStyle: "15px solid white",
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
		<Carousel style={JumboStyles} className="ourfont">
			<Carousel.Item>
				<img
					className="d-block w-100"
					src="https://media.giphy.com/media/SuwxpY1K29D1DKkjSF/giphy.gif
                    
                    
                   "
					//
					alt="First slide"
				/>
				<Carousel.Caption style={Caption}>
					<h1 />
				</Carousel.Caption>
			</Carousel.Item>
			<Carousel.Item>
				<img
					className="d-block w-100"
					src="https://media.giphy.com/media/gHiq1cvdxLohFart1u/giphy.gif
                    "
					alt="Third slide"
				/>

				<Carousel.Caption style={Caption}>
					<h3 />
				</Carousel.Caption>
			</Carousel.Item>
			<Carousel.Item>
				<img
					className=" d-block w-100 "
					src="https://media.giphy.com/media/S5nUPLIh9AjFxZ7frG/giphy.gif"
					alt="Third slide"
				/>

				<Carousel.Caption style={Caption}>
					<h3 />
				</Carousel.Caption>
			</Carousel.Item>
		</Carousel>
		<div
			className="jumbotron"
			style={{
				backgroundImage: "url(https://pbs.twimg.com/media/EHRv5d_UUAEMUEk?format=jpg&name=large)",
				backgroundRepeat: "no-repeat",
				height: "100%"
			}}>
			<h1 className="display-4" style={{ color: "white" }}>
				SEASON ONE
			</h1>
			<p className="lead" style={{ color: "white" }}>
				All Episodes now streaming only on Disney
			</p>

			<a className="btn btn-dark btn-lg" href="https://www.starwars.com/series/the-mandalorian" role="button">
				Explore
			</a>
		</div>
	</div>
);
