import React, { useState, useContext } from "react";
import { Context } from "../store/appContext";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import PropTypes from "prop-types";
import "./addRecipe.css";
import { DraggableList } from "./dragnDrop";

export const AddRecipe = props => {
	const { store, actions } = useContext(Context);
	const [image, setImage] = useState("");
	const [loading, setLoading] = useState(false);
	const [allinObject, setAllinObject] = useState({
		id: "",
		name: "",
		description: "",
		servings: "",
		ingridients: "",
		cooktime: "",
		author: "",
		email: "",
		image: "",
		cooktips: ""
		// person_id: store.contacts.id
	});

	// console.log("props", props.history);

	const uploadImage = async e => {
		const files = e.target.files;
		const data = new FormData();
		data.append("file", files[0]);
		data.append("upload_preset", "vuuhj7dc");
		setLoading(true);
		const res = await fetch("https://api.cloudinary.com/v1_1/div5hqtbd/image/upload", {
			method: "POST",
			body: data
		});
		const file = await res.json();
		setImage(file.secure_url);
		setAllinObject({ ...allinObject, image: file.secure_url });

		setLoading(false);
	};

	// console.log("image", image);

	return (
		<div className="addRecipe__container row">
			<div className="addRecipe__column__container col">
				<h2 className="mt-4 ">ADD RECIPE</h2> <hr />
				<div className="row mb-2">
					<div className="col addRecipe__addImage">
						<form method="post" action="#" id="#">
							<label className="addRecipe__label">
								<input className="addRecipe__input" type="file" name="file" onChange={uploadImage} />
								{loading ? <h3>Loading...</h3> : <img className="addRecipe__image" src={image} />}
							</label>
						</form>
						<small className="text-muted ml-3 ">Add Recipe Photo</small>
					</div>

					<Form className="col-7">
						<Form.Group className="addRecipe__description mr-4">
							<Form.Control
								as="textarea"
								controlId="exampleForm.ControlTextarea1"
								rows="7"
								onChange={e => setAllinObject({ ...allinObject, description: e.target.value })}
								value={allinObject.description}
							/>
							<small className="text-muted ml-1">Add Description</small>
						</Form.Group>
					</Form>
				</div>
				<div className="row mx-auto">
					<Form className="col ">
						<Form.Group className="recipe__name mr-1" controlId="formGroupBreed">
							<Form.Control
								type="name"
								placeholder="Recipe Name"
								onChange={e => setAllinObject({ ...allinObject, name: e.target.value })}
								value={allinObject.name}
							/>
							<small className="text-muted ml-1 ">Recipe Name</small>
						</Form.Group>
					</Form>
				</div>
				<div className="row mx-auto">
					<Form className="addResipe__servings col ">
						<Form.Group controlId="formGroupServings">
							<Form.Control
								type="servings"
								placeholder="Servings"
								onChange={e => setAllinObject({ ...allinObject, servings: e.target.value })}
								value={allinObject.servings}
							/>
							<small className="text-muted ml-1">Servings</small>
						</Form.Group>
					</Form>
					<Form.Group className="addResipe__cooktime col mr-1" controlId="formGroupCooktime">
						<Form.Control
							type="cooktime"
							placeholder="hr/min"
							onChange={e => setAllinObject({ ...allinObject, cooktime: e.target.value })}
							value={allinObject.cooktime}
						/>
						<small className="text-muted ml-1">Cooking time</small>
					</Form.Group>
				</div>
				<Form className="addRecipe__ingridiens row mx-auto">
					<Form.Group className="col" controlId="formGroupGender">
						<Form.Control
							type="ingridients"
							as="textarea"
							rows="7"
							onChange={e => setAllinObject({ ...allinObject, ingridients: e.target.value })}
							value={allinObject.ingridients}
						/>
						<small className="text-muted ml-1">Ingridients</small>
					</Form.Group>
					<Form.Group className="col mr-1" controlId="formGroupCooktips">
						<Form.Control
							type="cooktips"
							as="textarea"
							rows="7"
							onChange={e => setAllinObject({ ...allinObject, cooktips: e.target.value })}
							value={allinObject.cooktips}
						/>
						<small className="text-muted ml-1">Cooking tips</small>
					</Form.Group>
				</Form>
				<div className="row addRecipe__author__name mx-auto">
					<Form className="col mr-1">
						<Form.Group controlId="formGroupAuthor">
							<Form.Control
								type="author"
								placeholder="Author"
								onChange={e => setAllinObject({ ...allinObject, author: e.target.value })}
								value={allinObject.author}
							/>
							<small className="text-muted ml-1">Author Name</small>
						</Form.Group>
					</Form>
				</div>
				<Form className="row mx-auto">
					<Form.Group className="col mr-1" controlId="formGroupEmail">
						<Form.Control
							type="email"
							placeholder="Email"
							onChange={e => setAllinObject({ ...allinObject, email: e.target.value })}
							value={allinObject.email}
						/>
						<small className="text-muted ml-1">Enter Your Email</small>
					</Form.Group>
				</Form>
				<Button
					className=" addRecipe__button btn btn-dark"
					size="lg"
					block
					onClick={() => actions.recipePost(allinObject, props.history)}>
					{" "}
					Submit
				</Button>
			</div>

			<div className="dragndrop__component col section mx-auto">
				<DraggableList />
			</div>
		</div>
	);
};
AddRecipe.propTypes = {
	history: PropTypes.object
};
