import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";

import { Card } from "./views/card";
import { Favorites } from "./views/favorites";
import { Single } from "./views/single";
import injectContext from "./store/appContext";

import { Navbar } from "./component/navbar";
import { Footer } from "./component/footer";
import { People } from "./views/people";
import { Planets } from "./views/planets";
import { Vehicles } from "./views/vehicles";

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
						{/* <Route path="/demo" component={Demo} /> */}
						<Route path="/people" component={People} />
						<Route exact path="/" component={People} />
						<Route path="/favorites" component={Favorites} />
						<Route path="/vehicles" component={Vehicles} />
						<Route path="/planets" component={Planets} />
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
