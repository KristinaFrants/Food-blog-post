import React, { useState, useContext } from "react";
import { Context } from "../store/appContext";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import PropTypes from "prop-types";

let PawStyle = {
	fontSize: "70px"
};

let FormStyles = {
	// height: "80%",
	boxShadow: " 0px 10px 30px -5px grey",
	// width: "50%",
	// float: "left",
	marginRight: "2%",
	marginLeft: "6%",
	marginBottom: "2%",
	marginTop: "2%",
	fontFamily: "Sofia"
};

let ImgStiles = {
	width: "90%",
	// float: "right",
	backgroundRepeat: "no-repeat",
	marginRight: "2%",
	marginTop: "5%",
	marginBottom: "2%",
	boxShadow: " 0px 10px 30px -5px grey"
};

// let InputStyles = {
// 	borderStyle: "2px solid white",
// 	marginLeft: "4%",
// 	width: "80%"
// };
export const AddRecipe = props => {
	const { store, actions } = useContext(Context);
	const [image, setImage] = useState("");
	const [loading, setLoading] = useState(false);
	const [allinObject, setAllinObject] = useState({
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
	console.log("props", props.history);
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
	console.log("image", image);
	return (
		<div className="row">
			<div className="col" style={FormStyles}>
				<h2
					style={{
						marginLeft: "4%",
						marginTop: "8%"
					}}>
					ADD YOUR RECIPE
				</h2>
				<div className="text-center mt-5">
					<div className="row">
						<div className="col-md-6">
							<form method="post" action="#" id="#">
								<div className="form-group files color">
									<p className="float">Recipe Photo</p>
									<label
										style={{
											padding: "6px 6px",
											background: "white",
											boxShadow: "4px 4px 4px 2px grey",
											width: "50%",
											height: "150px"
										}}>
										<input
											type="file"
											name="file"
											style={{ display: "none", overflow: "hidden" }}
											// placeholder="Upload an image"
											onChange={uploadImage}
										/>
										{loading ? (
											<h3>Loading...</h3>
										) : (
											<img
												src={image}
												style={{
													width: "100px",
													height: "100%"
												}}
											/>
										)}
									</label>{" "}
								</div>
							</form>
						</div>
						<Form className="col-6">
							<Form.Group
								style={{ marginRight: "10%", float: "right", width: "95%" }}
								controlId="exampleForm.ControlTextarea1">
								<Form.Label>Description</Form.Label>
								<Form.Control
									as="textarea"
									rows="6"
									onChange={e => setAllinObject({ ...allinObject, description: e.target.value })}
									value={allinObject.description}
								/>
							</Form.Group>
						</Form>

						{/* <i style={PawStyle} className="fas fa-paw col-6  pl-5 pt-3" /> */}
					</div>
					<Form style={{ marginRight: "4%", width: "20%", float: "left" }}>
						<Form.Group controlId="formGroupAnimal">
							<Form.Label>servings</Form.Label>
							<Form.Control
								type="servings"
								placeholder="servings"
								onChange={e => setAllinObject({ ...allinObject, servings: e.target.value })}
								value={allinObject.servings}
							/>
						</Form.Group>
					</Form>
					<Form.Group
						style={{ float: "right", marginRight: "2%", width: "36%" }}
						className="col"
						controlId="formGroupAnimal">
						<Form.Label>cooktime</Form.Label>
						<Form.Control
							type="cooktime"
							placeholder="Type of cooktime?"
							onChange={e => setAllinObject({ ...allinObject, cooktime: e.target.value })}
							value={allinObject.cooktime}
						/>
					</Form.Group>
					<div className="row">
						<Form className="col-md-6">
							<Form.Group style={{ marginLeft: "6%", width: "130%" }} controlId="formGroupNickname">
								<Form.Label>name</Form.Label>
								<Form.Control
									type="name"
									placeholder="name"
									onChange={e => setAllinObject({ ...allinObject, name: e.target.value })}
									value={allinObject.name}
								/>
							</Form.Group>
						</Form>
						<Form className="col-md-6" />
					</div>
					<Form className="row">
						<Form.Group style={{ marginRight: "4%" }} className="col" controlId="formGroupBreed">
							<Form.Label>author</Form.Label>
							<Form.Control
								type="author"
								placeholder="Input author"
								onChange={e => setAllinObject({ ...allinObject, author: e.target.value })}
								value={allinObject.author}
							/>
						</Form.Group>
					</Form>
					<Form className="row">
						<Form.Group
							style={{ marginLeft: "4%", marginRight: "-2%", width: "50%" }}
							controlId="formGroupGender">
							<Form.Label>ingridients</Form.Label>
							<Form.Control
								type="ingridients"
								placeholder="ingridients "
								onChange={e => setAllinObject({ ...allinObject, ingridients: e.target.value })}
								value={allinObject.ingridients}
							/>
						</Form.Group>
						<Form.Group
							style={{ marginLeft: "4%", marginRight: "-2%" }}
							className="col"
							controlId="formGroupEyecolor">
							<Form.Label>Email</Form.Label>
							<Form.Control
								type="email"
								placeholder="email"
								onChange={e => setAllinObject({ ...allinObject, email: e.target.value })}
								value={allinObject.email}
							/>
						</Form.Group>
					</Form>
					<Form className="row">
						<Form.Group
							style={{ marginLeft: "4%", marginRight: "-2%" }}
							className="col"
							controlId="formGroupCooktips">
							<Form.Label>cooktips</Form.Label>
							<Form.Control
								type="cooktips"
								placeholder="cooktips"
								onChange={e => setAllinObject({ ...allinObject, cooktips: e.target.value })}
								value={allinObject.cooktips}
							/>
						</Form.Group>
					</Form>
					<Button
						id="btnLogin"
						className="btn btn-dark"
						style={{
							marginBottom: "4%",
							marginTop: "8%",
							width: "30%",

							padding: "10px",
							boxShadow: "4px 4px grey",
							fontFamily: "Playfair Display, serif"
						}}
						onClick={() => actions.recipePost(allinObject, props.history)}>
						{" "}
						Submit
					</Button>
				</div>
			</div>

			<div className="col">
				<img
					src="https://images.pexels.com/photos/949067/pexels-photo-949067.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
					style={ImgStiles}
				/>
			</div>
		</div>
	);
};
AddRecipe.propTypes = {
	history: PropTypes.object
};
