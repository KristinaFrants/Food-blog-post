import React, { useContext, useState } from "react";
import "../../styles/home.scss";
import PropTypes from "prop-types";
import { Context } from "../store/appContext";
import Card from "react-bootstrap/Card";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";

export const CardRecipe = props => {
	const [show, setShow] = useState(false);

	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);

	const { actions, store } = useContext(Context);
	const [selected, setSelected] = useState(false);

	// return (
	// 	<div>
	// 		{store.recipes.map((item, index) => {
	return (
		<Card
			// key={index}
			// style={{ width: "15rem" }}
			className="card_recipes__container">
			<Card.Img variant="top" src={props.image} className="card_recipes__image" />
			<hr />
			<Card.Body>
				<Card.Title>{props.name}</Card.Title>
				<Card.Text>
					<strong> Preparation time: </strong> {props.cooktime}
					<br />
					<strong> Servings: </strong> {props.servings}
					<br />
				</Card.Text>
			</Card.Body>
			<Card.Footer>
				<Button id="recipeButton" variant="outline-dark" size="lg" block onClick={handleShow}>
					Show Recipe
				</Button>
			</Card.Footer>

			<Modal
				{...props}
				size="lg"
				aria-labelledby="contained-modal-title-vcenter"
				centered
				show={show}
				onHide={handleClose}>
				<Modal.Header closeButton>
					<Modal.Title className="modal__title bg-light">{props.name}</Modal.Title>
				</Modal.Header>

				<Modal.Body>
					<div className="recipe__modal__preparation mb-4">
						<h6>
							<i>Preparation Time: {props.cooktime}</i>
						</h6>
					</div>
					<div className="recipe__modal__cooktips">
						<h1>
							<i>Cooktips</i>
						</h1>
						<hr />
						{props.cooktips}
					</div>

					<div className=" recipe__modal__cooktips">
						<h1>
							<i>Description</i>
						</h1>
						<hr />
						<br />
						{props.description}
						<br />
					</div>
					<h6>
						<i>Author: Eva Atkins</i>
					</h6>
					<div />
				</Modal.Body>
				<Modal.Footer>
					<Button variant="secondary" onClick={handleClose}>
						Close
					</Button>
				</Modal.Footer>
			</Modal>
		</Card>
	);

	// 		})}
	// 	</div>
	// );
};

CardRecipe.propTypes = {
	ind: PropTypes.number,
	id: PropTypes.number,
	servings: PropTypes.string,
	description: PropTypes.string,
	name: PropTypes.string,
	cooktime: PropTypes.string,
	data: PropTypes.object,
	image: PropTypes.string,
	cooktips: PropTypes.string,
	author: PropTypes.string
	// birth_year: PropTypes.string
};
