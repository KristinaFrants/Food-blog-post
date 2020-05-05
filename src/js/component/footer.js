import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";
import styled, { keyframes } from "styled-components";
// import { url } from "inspector";

export function Footer() {
	return (
		<footer className="footer-distributed">
			<div className="footer-left">
				<img
					style={{
						width: "10%",
						height: "20%"
					}}
					src="https://seeklogo.com/images/O/organic-food-logo-613EF00A48-seeklogo.com.png"
				/>
				<h3>
					Clean
					<span>Eating</span>
				</h3>
				{/* <p className="footer-links">
					<a href="#" className="link-1">
						Home
					</a>
					<a href="#">Blog</a>
					<a href="#">Pricing</a>
					<a href="#">About</a>
					<a href="#">Faq</a>
					<a href="#">Contact</a>
				</p> */}
				<p className="footer-company-name">Clean Eating © 2020</p>
			</div>
			<div className="footer-center">
				<div>
					<i className="fa fa-map-marker" />
					<p>
						<span>Miami Beach</span> North Beach, Florida
					</p>
				</div>
				<div>
					<i className="fa fa-phone" />
					<p>+1.555.555.5555</p>
				</div>
				<div>
					<i className="fa fa-envelope" />
					<p>
						<a href="mailto:support@company.com">support@company.com</a>
					</p>
				</div>
			</div>
			<div className="footer-right">
				<p className="footer-company-about">
					<h5>About the company</h5>
					Lorem ipsum dolor sit amet, consectateur adispicing elit. Fusce euismod convallis velit, eu auctor
					lacus vehicula sit amet.
				</p>
				<div className="footer-icons">
					<a href="#">
						<i className="fab fa-facebook-f" />
					</a>
					<a href="#">
						<i className="fab fa-twitter" />
					</a>
					<a href="#">
						<i className="fab fa-linkedin" />
					</a>
					<a href="#">
						<i className="fab fa-github" />
					</a>
				</div>
			</div>
		</footer>
	);
}
