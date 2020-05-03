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
		<div className=" text-center mt-5 mb-4 ml-4">
			<div
				className="card "
				style={{
					// width: "16rem",
					backgroundColor: "",
					color: "black",
					fontFamily: "Sofia"
				}}>
				<img
					style={{
						borderBottomStyle: "solid",
						width: "300px",
						height: "200px",
						padding: "7px",
						boxSizing: "border-box",
						margin: "1% 1% 1% 2%"
					}}
					className="image"
					src={props.image}
					alt="test"
					width="100%"
				/>
				{/* <img src="" className="card-img-top" alt="..." /> */}
				<a
					onClick={e => handleClick(e)}
					className="btn btn-dark "
					style={{
						color: "pink",
						marginLeft: "50%",
						width: "50%",
						marginBottom: "2%"
					}}>
					Show Video
				</a>
				<div
					style={{
						width: "300px",
						height: "200px"
					}}
					className="card-body">
					<h5 style={{ textAlign: "left" }} className="card-title" />
					<strong> Name : </strong> {props.name}
					<p style={{ textAlign: "left" }} className="card-text">
						{/* <strong> description : </strong> {props.description}
						<br /> */}
						&nbsp; <strong> Preparation time: </strong> {props.prep_time_minutes} minutes
						<br />
						&nbsp; <strong> {props.yields} </strong>
						<br />
					</p>{" "}
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
