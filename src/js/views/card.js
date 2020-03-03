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
		<div className="text-center mt-5">
			<div className="card" style={{ width: "18rem" }}>
				<img src="" className="card-img-top" alt="..." />
				<div className="card-body">
					<h5 className="card-title" />

					{props.name}
					<p className="card-text">
						{props.hair}
						&nbsp;
						{props.gender}
						&nbsp;
						{props.skin}
					</p>
					<a onClick={e => handleClick(e)} className="btn btn-primary">
						Go somewhere
					</a>
				</div>
			</div>
		</div>
	);
};
Card.propTypes = {
	ind: PropTypes.number,
	name: PropTypes.string,
	gender: PropTypes.string,
	hair: PropTypes.string,
	skin: PropTypes.string,
	data: PropTypes.object
};
