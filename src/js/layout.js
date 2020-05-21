import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";

import { Card } from "./views/card";
import { Books } from "./views/books";
import { Single } from "./views/single";
import injectContext from "./store/appContext";

import { Navbar } from "./component/navbar";
import { Footer } from "./component/footer";
import { Home } from "./views/home";
import { Recipes } from "./views/recipes";
import { AddRecipe } from "./views/addRecipe";
import { HomeBlog } from "./views/homeBlog";
import { RecipeContent } from "./views/showSelectedRecipe";
import { DraggableList } from "./views/dragnDrop";

//create your first component
export const Layout = () => {
	//the basename is used when your project is published in a subdirectory and not in the root of the domain
	// you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
	const basename = process.env.BASENAME || "";

	return (
		<div className="d-flex flex-column h-100">
			<BrowserRouter>
				<ScrollToTop>
					<Navbar />
					<Switch>
						{/* <Route exact path="/" component={Card} /> */}
						<Route path="/homeBlog" component={HomeBlog} />
						<Route path="/home" component={Home} />
						<Route exact path="/" component={Home} />
						<Route path="/books" component={Books} />
						<Route path="/showSelectedRecipe" component={RecipeContent} />
						<Route path="/addRecipe" component={AddRecipe} />
						<Route path="/dragnDrop" component={DraggableList} />
						<Route path="/recipes" component={Recipes} />
						<Route path="/single/:theid" component={Single} />
						<Route render={() => <h1>Not found!</h1>} />
					</Switch>
					<Footer />
				</ScrollToTop>
			</BrowserRouter>
		</div>
	);
};

export default injectContext(Layout);
