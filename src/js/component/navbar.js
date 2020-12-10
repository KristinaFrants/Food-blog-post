import React from "react";
import { Link } from "react-router-dom";
import { Button, Navbar, Nav, NavItem, NavDropdown, MenuItem } from "react-bootstrap";

export const Header = () => {
	return (
		<Navbar className="navbar mb-4" sticky="top" collapseOnSelect expand="lg" variant="dark">
			<Navbar.Brand style={{ color: "black" }} href="/">
				Home
			</Navbar.Brand>
			<Navbar.Toggle aria-controls="responsive-navbar-nav" />
			<Navbar.Collapse id="responsive-navbar-nav">
				<Nav className="mr-auto">
					<Nav.Link>
						<Link style={{ color: "black" }} to="/recipes">
							Recipies
						</Link>
					</Nav.Link>
					<Nav.Link>
						<Link style={{ color: "black" }} to="/addRecipe">
							Add Recipe
						</Link>
					</Nav.Link>
					{/* <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
						<NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
						<NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
						<NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
						<NavDropdown.Divider />
						<NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
					</NavDropdown> */}
				</Nav>
				<Nav>
					<Nav.Link>
						<Link style={{ color: "black" }} to="/books">
							Books
						</Link>
					</Nav.Link>
					{/* <Button variant="outline-dark">Search</Button> */}
					<a href="">
						<i className="fab fa-facebook-square p-2 ml-2 mr-2" />
					</a>
					<a href="">
						<i className="fab fa-instagram p-2 ml-2" />
					</a>
					<a href="">
						<i className="fab fa-twitter-square p-2 ml-2" />
					</a>
				</Nav>
			</Navbar.Collapse>
		</Navbar>
	);
};
