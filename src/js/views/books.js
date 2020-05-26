import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";
import { Card } from "./card.js";
import { Document, Page } from "react-pdf";

export const Books = props => {
	const { store, actions } = useContext(Context);
	const [numPages, setNumPages] = useState(null);
	const [pageNumber, setPageNumber] = useState(1);
	const [numPagess, setNumPagess] = useState(null);
	const [pageNumberr, setPageNumberr] = useState(1);

	function onDocumentLoadSuccess({ numPages }) {
		setNumPages(numPages);
	}

	function onDocumentLoadSuccess1({ numPagess }) {
		setNumPagess(numPagess);
	}
	function changePage(offset) {
		setPageNumber(prevPageNumber => prevPageNumber + offset);
	}
	function changePage(offset) {
		setPageNumberr(prevPageNumber => prevPageNumber + offset);
	}

	function previousPage() {
		changePage(-1);
	}

	function nextPage() {
		changePage(1);
	}

	return (
		<div className=" w-100 mx-auto">
			<div className=" col ">
				<hr style={{ border: "1px solid rgb(39, 39, 39)", marginTop: "3%" }} />
				<h3 style={{ color: "grey", marginLeft: "2%", fontFamily: "Candal" }}>BOOKS //</h3>
				<hr style={{ border: "1px solid rgb(39, 39, 39" }} />
			</div>

			<div className="row">
				<div
					className="col-5"
					style={{
						border: "solid grey",
						margin: "0% 0% 2% 2%",
						boxSizing: "border-box"
					}}>
					<Document
						file="https://res.cloudinary.com/div5hqtbd/image/upload/v1590439361/chicken_new_fwxakh.pdf"
						onLoadSuccess={onDocumentLoadSuccess}>
						<Page pageNumber={pageNumber} />
					</Document>
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

				<div
					className="col-lg-5 col-12 "
					style={{
						border: "solid grey",
						margin: "0% 0% 2% 2%",
						boxSizing: "border-box"
					}}>
					<Document
						file="https://res.cloudinary.com/div5hqtbd/image/upload/v1590449935/salad_print_book_gbfv8b.pdf"
						onLoadSuccess={onDocumentLoadSuccess1}>
						<Page pageNumber={pageNumberr} />
					</Document>
					<div>
						<p style={{ marginLeft: "4%" }}>
							Page {pageNumberr || (numPagess ? 1 : "--")} of {numPagess || "--"}
						</p>
						<button
							style={{ marginLeft: "4%" }}
							type="button"
							disabled={pageNumberr <= 1}
							onClick={previousPage}>
							Previous
						</button>
						<button type="button" disabled={pageNumberr >= numPagess} onClick={nextPage}>
							Next
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};
