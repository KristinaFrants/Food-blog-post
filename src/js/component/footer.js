import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";
import styled, { keyframes } from "styled-components";

export function Footer() {
	return (
		<footer className="container__footer">
			<div className="container">
				<div className="row ">
					<div className="col-md-4 text-center text-md-left ">
						<div className="py-0">
							<h3 className="my-4 text-black">
								Simple
								<span className="mx-2 font-italic text-success ">Veganista</span>
							</h3>
							<p className="footer-links font-weight-bold ">
								<a className="text-black mr-2" href="./home">
									Home
								</a>
								|
								<a className="text-black mr-2" href="./recipes">
									Recipes
								</a>
								|
								<a className="text-black mr-2" href="./books">
									Books
								</a>
								|
								<a className="text-black" href="mailto:support@email.com">
									Contact
								</a>
							</p>
							<p className="text-black py-4 mb-4">©2020 Build by WebFluencer</p>
						</div>
					</div>
					<div className="col-md-4 text-black text-center text-md-left ">
						<div className="py-2 my-4">
							<div>
								<p className="text-black">
									{" "}
									<i className="fa fa-map-marker mx-2 " />
									Miami, FL. WebFluencer
								</p>
							</div>
							<div>
								<p>
									<i className="fa fa-phone  mx-2 " /> +571 555 55 555
								</p>
							</div>
							<div>
								<p>
									<i className="fa fa-envelope  mx-2" />
									<a style={{ color: "green" }} href="mailto:support@email.com">
										support@WebFluencer.com
									</a>
								</p>
							</div>
						</div>
					</div>
					<div className="col-md-4 text-black my-4 text-center text-md-left ">
						<span className=" font-weight-bold ">About the Company</span>
						<p className="text-success my-2">
							We offer custom designs, marketing solutions, web templates and strategies for your small
							business
						</p>
						<div className="py-2">
							<a href="#">
								<i className="fab fa-facebook fa-2x text-primary mx-3" />
							</a>
							<a href="#">
								<i className="fab fa-google-plus fa-2x text-danger mx-3" />
							</a>
							<a href="#">
								<i className="fab fa-twitter fa-2x text-info mx-3" />
							</a>
							<a href="#">
								<i className="fab fa-youtube fa-2x text-danger mx-3" />
							</a>
						</div>
					</div>
				</div>
			</div>
		</footer>
	);
}
