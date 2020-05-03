import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import Flippy, { FrontSide, BackSide } from "react-flippy";

export const HomeBlog = props => {
	const { store, actions } = useContext(Context);
	return (
		<div
			style={{
				width: "100%",
				display: "grid",
				gridAutoFlow: "row dense",
				gridAutoRows: "$gridSize",
				marginTop: "4%",
				marginBottom: "10%"
				// gridGap: "$boxSpacing",
				// gridTemplateColumns: "repeat(auto-fit, minmax($gridSize, $gridSize))"
			}}
			className="container">
			<div
				style={{
					padding: "5%",
					backgroundColor: "#d3bec0c9",
					marginBottom: "2%"
				}}
				className="card-left">
				<div className="pic-flip">
					<Flippy
						flipOnHover={true} // default false
						// flipOnClick={true} // default false
						flipDirection="horizontal" // horizontal or vertical
						// ref={r => flippy.toggle()}
					>
						<div className="card-image">
							<FrontSide>
								<img src="https://images.unsplash.com/photo-1505935428862-770b6f24f629?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=747&q=80" />
							</FrontSide>
						</div>
						<div className="card-image2">
							<BackSide>
								<img src="https://images.unsplash.com/photo-1505934558824-08367d002416?ixlib=rb-1.2.1&auto=format&fit=crop&w=732&q=80" />
							</BackSide>
						</div>
					</Flippy>
				</div>
				<div
					style={{
						border: "2px solid rgb(175, 175, 175)",
						height: "300px",
						marginLeft: "2%"
					}}
					className="card-text">
					<h4 style={{ textAlign: "right", marginBottom: "4%" }}>Welcome to our new page! </h4>
					<p style={{ textAlign: "right" }}>
						WHATS NEW? <br />
						Hello and welcome to our new home.There is a new and totally improved recipe archive where you
						can see preview images of all the recipes and scroll or filter the categories. A much improved
						book section and a new video section. We will also be adding a shop later on that we are very
						excited about! Hope you will enjoy the new site! Big love!
					</p>
				</div>
			</div>
			<div
				style={{
					flexDirection: "column",
					// border: "2px solid black",
					// marginTop: "8%",
					padding: "7%",
					marginTop: "2%"
				}}
				className="card-top ">
				<div className="card-image">
					<img src="https://images.pexels.com/photos/1011334/pexels-photo-1011334.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260" />
				</div>
				<div className="card-text">
					<p>Quisque cursus, metus vitae pharetra auctor.</p>
				</div>
			</div>
			<div
				style={{
					padding: "7%",
					marginTop: "2%",
					marginLeft: "0.5%"
				}}
				className="card-right">
				<div className="card-image">
					<img src="https://images.pexels.com/photos/35828/soap-bubble-colorful-ball-soapy-water.jpg?auto=compress&cs=tinysrgb&h=750&w=1260" />
				</div>
				<div className="card-text">
					<p>Ut eu diam at pede suscipit sodales.</p>
				</div>
			</div>
			<div
				style={{
					padding: "7%",
					marginTop: "3%",
					marginLeft: "0.5%",
					backgroundColor: "#d3bec0c9"
				}}
				className="card-right">
				<div className="card-image">
					<img src="https://images.pexels.com/photos/701855/pexels-photo-701855.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260" />
				</div>
				<div className="card-text">
					<p>Donec lacus nunc, viverra nec, blandit vel, egestas et, augue.</p>
				</div>
			</div>
			<div
				style={{
					flexDirection: "column",
					padding: "7%",
					marginTop: "2%",
					marginLeft: "2%"
				}}
				className="card-top">
				<div className="card-image">
					<img src="https://images.pexels.com/photos/668295/pexels-photo-668295.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260" />
				</div>
				<div className="card-text">
					<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
				</div>
			</div>
			<div
				style={{
					padding: "7%",
					marginTop: "8%"
				}}
				className="card-bottom">
				<div className="card-image">
					<img src="https://images.pexels.com/photos/63238/pexels-photo-63238.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260" />
				</div>
				<div className="card-text">
					<p>Ut eu diam at pede suscipit sodales.</p>
				</div>
			</div>
			<div
				style={{
					padding: "7%",
					marginTop: "5%",
					marginLeft: "0.5%"
				}}
				className="card-left">
				<div className="card-image">
					<img src="https://images.pexels.com/photos/997725/pexels-photo-997725.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260" />
				</div>
				<div className="card-text">
					<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
				</div>
			</div>
			<div
				style={{
					padding: "7%",
					marginTop: "8%",
					marginLeft: "2%"
				}}
				className="card-bottom">
				<div className="card-image">
					<img src="https://images.pexels.com/photos/585581/pexels-photo-585581.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260" />
				</div>
				<div className="card-text">
					<p>Quisque cursus, metus vitae pharetra auctor.</p>
				</div>
			</div>
			<div
				style={{
					padding: "7%",
					marginTop: "6%",
					marginLeft: "0.5%"
				}}
				className="card-right">
				<div className="card-image">
					<img src="https://images.pexels.com/photos/532561/pexels-photo-532561.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260" />
				</div>
				<div className="card-text">
					<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
				</div>
			</div>
			<div style={{ flexDirection: "column", marginTop: "14%", padding: "7%" }} className="card-top">
				<div className="card-image">
					<img src="https://images.pexels.com/photos/279376/pexels-photo-279376.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260" />
				</div>
				<div className="card-text">
					<p>Integer lacinia sollicitudin massa. Cras metus.</p>
				</div>
			</div>
			<div style={{ marginTop: "8%", padding: "7%", marginLeft: "0.5%" }} className="card-left">
				<div className="card-image">
					<img src="https://images.pexels.com/photos/262577/pexels-photo-262577.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260" />
				</div>
				<div className="card-text">
					<p>Ut eu diam at pede suscipit sodales.</p>
				</div>
			</div>
			<div
				style={{ flexDirection: "column", marginTop: "14%", padding: "7%", marginLeft: "2%" }}
				className="card-top">
				<div className="card-image">
					<img src="https://images.pexels.com/photos/978342/pexels-photo-978342.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260" />
				</div>
				<div className="card-text">
					<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
				</div>
			</div>
			<div style={{ marginTop: "18%", padding: "7%" }} className="card-bottom">
				<div className="card-image">
					<img src="https://images.pexels.com/photos/305831/pexels-photo-305831.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260" />
				</div>
				<div className="card-text">
					<p>Quisque cursus, metus vitae pharetra auctor.</p>
				</div>
			</div>
			<div
				style={{ flexDirection: "column", marginTop: "18%", padding: "7%", marginLeft: "2%" }}
				className="card-top">
				<div className="card-image">
					<img src="https://images.pexels.com/photos/355728/pexels-photo-355728.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260" />
				</div>
				<div className="card-text">
					<p>Donec lacus nunc, viverra nec, blandit vel, egestas et, augue.</p>
				</div>
			</div>
			<div style={{ marginTop: "10%", padding: "7%", marginLeft: "0.5%" }} className="card-right">
				<div className="card-image">
					<img src="https://images.pexels.com/photos/775907/pexels-photo-775907.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260" />
				</div>
				<div className="card-text">
					<p>Ut eu diam at pede suscipit sodales.</p>
				</div>
			</div>
		</div>
	);
};
