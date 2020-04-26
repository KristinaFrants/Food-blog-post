import React from "react";
import { Link } from "react-router-dom";

let NavStyles = {
	// color: "white",
	// url: "https://www.starwars.com/",
	// urlText: "text",
	backgroundColor: "black",
	// margin: "20px",
	height: "160px",
	color: "white"
};

let IconStyles = {
	height: "35px",
	width: "50px",
	color: "white",
	marginTop: "25px"
};

let LinkStyles = {
	margin: "2% 2% 2%",
	textDecoration: "none",
	padding: "10px 7px ",
	// textDecoration: " underline dotted grey",
	color: "white"
};

export const Navbar = () => {
	// 	return (
	// // 		<nav className="navbar navbar-light bg-light mb-3">
	// // 			<Link to="/">
	// // 				<span className="navbar-brand mb-0 h1">React Boilerplate</span>
	// // 			</Link>
	// // 			<div className="ml-auto">
	// // 				<Link to="/demo">
	// // 					<button className="btn btn-primary">Check the Context in action</button>
	// // 				</Link>
	// // 				<Link to="/people">
	// // 					<button className="btn btn-primary">people</button>
	// // 				</Link>
	// // 			</div>
	// // 		</nav>
	// // 	);
	// // };
	return (
		<div className="row" style={NavStyles}>
			<div className="col-4">
				<a href="">
					<i
						className="fab fa-facebook-square"
						style={{
							marginLeft: "8%",
							height: "35px",
							width: "50px",
							color: "white",
							marginTop: "25px"
						}}>
						{" "}
					</i>
				</a>
				<a href="">
					<i style={IconStyles} className="fab fa-instagram">
						{" "}
					</i>
				</a>
				<a href="">
					<i className="fab fa-github-square" style={IconStyles}>
						{" "}
					</i>
				</a>
				<a href="">
					<i className="fab fa-twitter-square" style={IconStyles} />
				</a>
			</div>
			<div
				style={{
					background:
						"url(https://clipart.info/images/ccovers/1513370389Star%20Wars%20Logo%20transparent%20PNG.png) no-repeat center",
					backgroundSize: "auto 100%",
					padding: "0px"
				}}
				className="col col1"
			/>
			<div className="col col2">
				<ul className="list-group list-group-horizontal">
					<Link style={LinkStyles} to="/people">
						{" "}
						People
					</Link>
					<Link style={LinkStyles} to="/planets">
						{" "}
						Planets
					</Link>
					<Link style={LinkStyles} to="/vehicles">
						{" "}
						Vehicles
					</Link>
					<Link style={LinkStyles} to="/favorites">
						{" "}
						Favorites
					</Link>
				</ul>
			</div>
		</div>
	);
};
