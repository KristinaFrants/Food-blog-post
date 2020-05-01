import React from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.scss";
import { Carousel, Container } from "react-bootstrap";
import PropTypes from "prop-types";
import YouTube from "@u-wave/react-youtube";

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
		<Carousel style={JumboStyles} className="ourfont">
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
		</Carousel>
		<div
			className="jumbotron h-100 mb-2"
			style={{
				backgroundImage: "url(https://pbs.twimg.com/media/EHRv5d_UUAEMUEk?format=jpg&name=large)",
				backgroundRepeat: "no-repeat"
			}}>
			<h1 className="display-4" style={{ color: "white" }}>
				SEASON ONE
			</h1>
			<p className="lead" style={{ color: "white" }}>
				All Episodes now streaming only on Disney
			</p>

			<a
				style={{ color: "pink" }}
				className="btn btn-dark btn-lg"
				href="https://www.starwars.com/series/the-mandalorian"
				role="button">
				Explore
			</a>
		</div>
		<div className=" col ">
			<hr style={{ border: "1px solid rgb(39, 39, 39)", marginTop: "3%" }} />
			<h3 style={{ color: "grey", marginLeft: "2%", fontFamily: "Candal" }}>LATEST VIDEO //</h3>
			<hr style={{ border: "1px solid rgb(39, 39, 39" }} />
		</div>

		<div className="row">
			<div className="col ">
				<YouTube
					style={{ width: "500px", height: "300px", margin: "2% 6% 2% 8%" }}
					video="OFlBh_eUsjA"
					autoplay
				/>
				<YouTube
					style={{ width: "500px", height: "300px", margin: "2% 2% 2% 2%" }}
					video="6DF0X84iOwk"
					autoplay
				/>
			</div>
		</div>
	</div>
);
