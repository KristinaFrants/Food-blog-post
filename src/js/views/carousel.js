// import React, { useContext } from "react";
// // import { Context } from "../store/appContext";

// export const Carousel = props => {
// 	// const { store, actions } = useContext(Context);

// 	return (
// 		<div
// 			id="carouselExampleIndicators"
// 			className="carousel slide "
// 			data-ride="carousel"
// 			style={{
// 				marginLeft: "5%",
// 				marginRight: "5%",
// 				marginBottom: "3%",
// 				borderRadius: "5px",
// 				boxShadow: " 0px 15px 30px -5px #3e4244",
// 				marginTop: "4%"
// 			}}>
// 			<ol className="carousel-indicators">
// 				<li data-target="#carouselExampleIndicators" data-slide-to={0} className="active" />
// 				<li data-target="#carouselExampleIndicators" data-slide-to={1} />
// 				<li data-target="#carouselExampleIndicators" data-slide-to={2} />
// 			</ol>
// 			<div className="carousel-inner">
// 				<div className="carousel-item active">
// 					<img
// 						src="https://image.freepik.com/free-vector/explosion-process-set-with-explosion-stages-symbols-cartoon-vector-illustration_98292-3504.jpg"
// 						// src="https://media1.tenor.com/images/a53e378bb32fdbcabd28565ae799cfd5/tenor.gif?itemid=15912640"
// 						className="d-block w-100"
// 						alt="..."
// 					/>
// 				</div>
// 				<div className="carousel-item">
// 					<img
// 						src="https://image.freepik.com/free-vector/colorful-light-sword-collection_23-2147914598.jpg"
// 						className="d-block w-100"
// 						alt="..."
// 					/>
// 				</div>
// 				<div className="carousel-item">
// 					<img
// 						src="https://image.freepik.com/free-vector/warp-stars-zoom-blue-galaxy-war-vector-abstract-background_53562-2318.jpg"
// 						className="d-block w-100"
// 						alt="..."
// 					/>
// 				</div>
// 			</div>
// 			<a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
// 				<span className="carousel-control-prev-icon" aria-hidden="true" />
// 				<span className="sr-only">Previous</span>
// 			</a>
// 			<a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
// 				<span className="carousel-control-next-icon" aria-hidden="true" />
// 				<span className="sr-only">Next</span>
// 			</a>
// 		</div>
// 	);
// };

import React from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.scss";
import { Carousel, Container } from "react-bootstrap";
import PropTypes from "prop-types";

let JumboStyles = {
	borderStyle: "15px solid white",
	width: "90%",
	marginLeft: "auto",
	marginRight: "auto",
	marginBottom: "3%",
	borderRadius: "5px",
	boxShadow: " 0px 15px 30px -5px #3e4244",
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
	</div>
);
