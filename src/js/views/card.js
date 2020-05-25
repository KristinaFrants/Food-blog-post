import React, { useContext, useState } from "react";
import "../../styles/home.scss";
import PropTypes from "prop-types";
import { Context } from "../store/appContext";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";

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
						width: "250px",
						height: "200px",
						padding: "7px",
						boxSizing: "border-box",
						margin: "2% 1% 2% 7%"
					}}
					className="image"
					src={props.image}
					alt="img"
					width="100%"
				/>
				{/* <img src="" className="card-img-top" alt="..." /> */}
				{/* <Link to="/recipe-show">Recipe</Link> */}
				<Button
					id="recipeButton"
					style={{ width: "50%", margin: "2% 0% 0% 20%" }}
					variant="white"
					onClick={handleShow}>
					Show Recipe
				</Button>
				<Modal
					{...props}
					size="lg"
					aria-labelledby="contained-modal-title-vcenter"
					centered
					show={show}
					onHide={handleClose}>
					<Modal.Header closeButton>
						<Modal.Title style={{ fontStyle: "italic" }}>{props.name}</Modal.Title>
					</Modal.Header>
					<Modal.Body>
						<Container>
							<h3 style={{ fontStyle: "italic" }}>Cooking Tips</h3>
							<Row className="show-grid">
								<Col xs={12} md={8}>
									<p3>{props.cooktips} </p3>
								</Col>
								<Col xs={6} md={4}>
									<img
										style={{
											borderStyle: "solid, grey, 2px",
											width: "200px",
											height: "200px",
											// padding: "7px",
											boxSizing: "border-box",
											margin: "1% 1% 3% %"
										}}
										src={props.image}
									/>
								</Col>
							</Row>
							<br />
							<h3 style={{ fontStyle: "italic" }}>Description</h3>
							<Row className="show-grid">
								{/* <Col xs={} md={}> */}
								<Col>
									<p>{props.description}</p>
								</Col>
								{/* <Col xs={6} md={4}>
									<code>.col-xs-6 .col-md-4</code>
								</Col> */}
								{/* <Col xs={6} md={6}>
									<p3>{props.cooktime} </p3>
								</Col> */}
							</Row>
							<p style={{ fontStyle: "italic" }}>Bon Appetit!</p>
						</Container>
					</Modal.Body>
					<Modal.Footer>
						<Button variant="secondary" onClick={handleClose}>
							Close
						</Button>
					</Modal.Footer>
				</Modal>

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
