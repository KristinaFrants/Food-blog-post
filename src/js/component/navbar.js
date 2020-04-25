import React from "react";
import { Link } from "react-router-dom";

let NavStyles = {
	// color: "white",
	url: "https://www.starwars.com/",
	urlText: "text",
	backgroundColor: "black",
	margin: "20px",
	height: "100px",
	color: "white"
};

let IconStyles = {
	margin: "2px",
	height: "35px",
	width: "45px",
	color: "white",
	marginTop: "25px"
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
				<a href="https://techcrunch.com/">
					<i className="fab fa-facebook-square" style={IconStyles}>
						{" "}
					</i>
				</a>
				<a href="https://techcrunch.com/">
					<i className="fab fa-instagram" style={IconStyles}>
						{" "}
					</i>
				</a>
				<a href="https://techcrunch.com/">
					<i className="fab fa-github-square" style={IconStyles}>
						{" "}
					</i>
				</a>
				<a href="https://techcrunch.com/">
					<i className="fab fa-twitter-square" style={IconStyles} />
				</a>
			</div>
			<div className="col col1" />
			<div className="col col2">
				<ul className="list-group list-group-horizontal">
					<Link to="/people">
						{" "}
						<li className="list-group-item">People</li>
					</Link>
					<Link to="/planets">
						{" "}
						<li className="list-group-item">Planets</li>
					</Link>
					<Link to="/vehicles">
						{" "}
						<li className="list-group-item">Vehicles</li>
					</Link>
					<Link to="/favorites">
						{" "}
						<li className="list-group-item">favorites</li>
					</Link>
				</ul>
			</div>
		</div>
	);
};
