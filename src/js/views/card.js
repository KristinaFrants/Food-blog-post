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
			className=" text-center mt-5 mb-4"
			style={{
				marginLeft: "4%",
				marginRight: "2%"
			}}>
			<div
				className="card "
				style={{
					// width: "16rem",
					backgroundColor: "",
					color: "black",
					fontFamily: "Sofia"
					// boxShadow: "0px 3px 9px 1px rgba(0, 10, 20, 0.2)"
				}}>
				<img
					style={{
						borderBottomStyle: "solid",
						width: "300px",
						height: "200px",
						padding: "5px",
						boxSizing: "border-box",
						margin: "1% 1% 1% 1%"
					}}
					className="image"
					src={props.image}
					alt="test"
					width="100%"
				/>
				{/* <img src="" className="card-img-top" alt="..." /> */}
				<div
					style={{
						width: "300px",
						height: "200px"
					}}
					className="card-body">
					<h5 className="card-title" />
					<strong> Name : </strong> {props.name}
					<p style={{ textAlign: "left" }} className="card-text">
						{/* <strong> description : </strong> {props.description}
						<br /> */}
						&nbsp; <strong> Preparation time: </strong> {props.prep_time_minutes} minutes
						<br />
						&nbsp; <strong> {props.yields} </strong>
						<br />
						{/* &nbsp; <strong> Eye Color : </strong> {props.birth_year}
						<br /> */}
					</p>
					<a onClick={e => handleClick(e)} className="btn btn-dark mb-6" style={{ color: "pink" }}>
						Show Video
					</a>
				</div>
			</div>
		</div>
	);
};
Card.propTypes = {
	ind: PropTypes.number,
	prep_time_minutes: PropTypes.number,
	description: PropTypes.string,
	name: PropTypes.string,
	yields: PropTypes.string,
	data: PropTypes.object,
	image: PropTypes.string
	// birth_year: PropTypes.string
};
