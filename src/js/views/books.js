import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";
import { Card } from "./card.js";
import { Document, Page } from "react-pdf";

export const Books = props => {
	const { store, actions } = useContext(Context);
	const [numPages, setNumPages] = useState(null);
	const [pageNumber, setPageNumber] = useState(1);

	function onDocumentLoadSuccess({ numPages }) {
		setNumPages(numPages);
	}

	function changePage(offset) {
		setPageNumber(prevPageNumber => prevPageNumber + offset);
	}

	function previousPage() {
		changePage(-1);
	}

	function nextPage() {
		changePage(1);
	}

	return (
		<div
			className=" w-100 mx-auto"
			style={{
				backgroundImage: "url()"
			}}>
			<div className=" col ">
				<hr style={{ border: "1px solid rgb(39, 39, 39)", marginTop: "3%" }} />
				<h3 style={{ color: "grey", marginLeft: "2%", fontFamily: "Candal" }}>BOOKS //</h3>
				<hr style={{ border: "1px solid rgb(39, 39, 39" }} />
			</div>
			<div>
				<Document
					file="https://res.cloudinary.com/div5hqtbd/image/upload/v1590439361/chicken_new_fwxakh.pdf"
					onLoadSuccess={onDocumentLoadSuccess}>
					<Page pageNumber={pageNumber} />
				</Document>
				{/* <p>
					Page {pageNumber} of {numPages}
                </p> */}
				<div>
					<p style={{ marginLeft: "4%" }}>
						Page {pageNumber || (numPages ? 1 : "--")} of {numPages || "--"}
					</p>
					<button
						style={{ marginLeft: "4%" }}
						type="button"
						disabled={pageNumber <= 1}
						onClick={previousPage}>
						Previous
					</button>
					<button type="button" disabled={pageNumber >= numPages} onClick={nextPage}>
						Next
					</button>
				</div>
			</div>

			{/* <div
				className="row"
				style={{
					marginBottom: "5%"
				}}>
				{store.favorites.map((fav, index) => (
					<Card key={index} name={store.recipe[fav].name} />
				))}
			</div> */}
		</div>
	);
};
