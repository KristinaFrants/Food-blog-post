import React, { useContext, useState } from "react";
import "../../styles/home.scss";
import PropTypes from "prop-types";
import { Context } from "../store/appContext";

export const Card = props => {
	const { actions, store } = useContext(Context);
	const [selected, setSelected] = useState(false);
	const handleClick = e => {
		setSelected(!selected);
		actions.toggleFavorite(props.ind);
	};

	console.log(store.favorites);

	return (
		<div
			className="text-center mt-5"
			style={{
				marginLeft: "4%",
				marginRight: "2%"
			}}>
			<div
				className="card"
				style={{ width: "16rem", backgroundColor: "rgb(39, 39, 39)", color: "white", fontFamily: "Candal" }}>
				<img
					style={{
						borderBottomStyle: "solid",
						borderColor: "pink",
						borderBottomWidth: "thin"
					}}
					className="image"
					src={props.image}
					alt="test"
					width="100%"
				/>
				{/* <img src="" className="card-img-top" alt="..." /> */}
				<div className="card-body">
					<h5 className="card-title" />
					<strong> Name : </strong> {props.name}
					<p className="card-text">
						<strong> description : </strong> {props.instructions}
						<br />
						&nbsp; <strong> Ratio : </strong> {props.aspect_ratio}
						<br />
						&nbsp; <strong> Tags : </strong> {props.keywords}
						<br />
						{/* &nbsp; <strong> Eye Color : </strong> {props.birth_year}
						<br /> */}
					</p>
					<a onClick={e => handleClick(e)} className="btn btn-dark " style={{ color: "pink" }}>
						Show Video
					</a>
				</div>
				display_text
			</div>
		</div>
	);
};
Card.propTypes = {
	ind: PropTypes.number,
	name: PropTypes.string,
	instructions: PropTypes.object,
	display_text: PropTypes.string,
	country: PropTypes.string,
	aspect_ratio: PropTypes.string,
	keywords: PropTypes.string,
	data: PropTypes.object,
	image: PropTypes.string
	// birth_year: PropTypes.string
};
