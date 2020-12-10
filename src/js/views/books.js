import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";
import { Document, Page, pdfjs } from "react-pdf";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;
import "./books.css";

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

	function changePage1(offset) {
		setPageNumberr(prevPageNumber => prevPageNumber + offset);
	}

	function previousPage() {
		changePage(-1);
	}

	function nextPage() {
		changePage(1);
	}

	function previousPage1() {
		changePage1(-1);
	}

	function nextPage1() {
		changePage1(1);
	}

	return (
		<div className="books__container">
			<div className=" ">
				<i>
					<h1 className=" books__header mt-4">Look Inside Our Books</h1>
				</i>
			</div>

			<div className="books__pdf row">
				<div className="books__left col">
					<Document
						file="
						https://res.cloudinary.com/div5hqtbd/image/upload/v1590449935/salad_print_book_gbfv8b.pdf"
						onLoadSuccess={onDocumentLoadSuccess}>
						<Page pageNumber={pageNumber} />
					</Document>
					<div>
						<button
							type="button"
							className="books__leftButton btn-dark"
							disabled={pageNumber <= 1}
							onClick={previousPage}>
							Previous
						</button>
						<button
							className="books__leftButton btn-dark"
							type="button"
							disabled={pageNumber >= numPages}
							onClick={nextPage}>
							Next
						</button>
						<p style={{ marginLeft: "4%" }}>
							Page {pageNumber || (numPages ? 1 : "--")} of {numPages || "--"}
						</p>
					</div>
				</div>

				<div className="books__content col">
					<i>
						<h3>What you will find inside:</h3>
					</i>
					<hr />
					<p>
						Simple 3 steps salad recipes for whole month.
						<br />
						Best brunch or dinner choises for your beloved ones.
						<br />
						Calories table under each salad recipe.
						<br />
						Exclusive full color design pages with prepared salads photos.
						<br />
						Recipes collected from around the world.
						<br />
					</p>
					<br />
					<br />
					<a href="https://www.amazon.com/Delicious-Salad-Recipes-Ingredients-Decisions-ebook/dp/B06XTWJ9D2/ref=sr_1_fkmr0_1?dchild=1&keywords=eva+atkins+cook+easy+salad+recipes&qid=1606939148&sr=8-1-fkmr0">
						<h5 className="books__kindle"> Get it for free on your Kindle</h5>
					</a>
					<br />
				</div>

				{/* <div className="books__right col">
					<Document
						file="https://res.cloudinary.com/div5hqtbd/image/upload/v1590449935/salad_print_book_gbfv8b.pdf"
						((chicken url: https://res.cloudinary.com/div5hqtbd/image/upload/v1590439361/chicken_new_fwxakh.pdf))
						onLoadSuccess={onDocumentLoadSuccess1}>
						<Page pageNumber={pageNumberr} />
					</Document>
					<div>
						<button
							className="books__leftButton btn-dark"
							type="button"
							disabled={pageNumberr <= 1}
							onClick={previousPage1}>
							Previous
						</button>
						<button
							className="books__leftButton btn-dark"
							type="button"
							disabled={pageNumberr >= numPagess}
							onClick={nextPage1}>
							Next
						</button>
						<p style={{ marginLeft: "4%" }}>
							Page {pageNumberr || (numPagess ? 1 : "--")} of {numPagess || "--"}
						</p>
					</div>
				</div> */}
			</div>
		</div>
	);
};
