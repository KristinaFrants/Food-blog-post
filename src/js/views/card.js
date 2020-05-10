import React, { useContext, useState } from "react";
import "../../styles/home.scss";
import PropTypes from "prop-types";
import { Context } from "../store/appContext";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

export const Card = props => {
	const [show, setShow] = useState(false);

	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);

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
						margin: "1% 1% 3% %"
					}}
					className="image"
					src={props.image}
					alt="img"
					width="100%"
				/>
				{/* <img src="" className="card-img-top" alt="..." /> */}

				<Modal show={show} onHide={handleClose}>
					<Modal.Header closeButton>
						<Modal.Title>{props.name}</Modal.Title>
					</Modal.Header>
					<Modal.Body>
						{props.description}
						<br />
						<br />
						{props.cooktips}
					</Modal.Body>
					<Modal.Footer>
						<Button variant="secondary" onClick={handleClose}>
							Close
						</Button>
					</Modal.Footer>
				</Modal>
				<Button style={{ width: "70%" }} variant="dark" onClick={handleShow}>
					Show Recipe
				</Button>
				<div
					style={{
						width: "300px",
						height: "200px"
					}}
					className="card-body">
					<h5 style={{ textAlign: "left" }} className="card-title">
						{props.name}{" "}
					</h5>
					<p style={{ textAlign: "left" }} className="card-text">
						&nbsp; <strong> Preparation time: </strong> {props.cooktime} minutes
						<br />
						&nbsp;
						<strong> Servings: </strong> {props.servings}
						<br />
						{/* &nbsp; <strong> Cook Tips: </strong> {props.cooktips} */}
						<br />
					</p>{" "}
				</div>
			</div>
		</div>
	);
};
Card.propTypes = {
	ind: PropTypes.number,
	servings: PropTypes.string,
	description: PropTypes.string,
	name: PropTypes.string,
	cooktime: PropTypes.string,
	data: PropTypes.object,
	image: PropTypes.string,
	cooktips: PropTypes.string
	// birth_year: PropTypes.string
};
