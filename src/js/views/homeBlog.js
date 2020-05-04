import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import Flippy, { FrontSide, BackSide } from "react-flippy";

export const HomeBlog = props => {
	const { store, actions } = useContext(Context);
	return (
		<div
			style={{
				width: "100%",
				display: "grid",
				gridAutoFlow: "row dense",
				gridAutoRows: "$gridSize",
				marginTop: "4%",
				marginBottom: "10%"
			}}
			className="container">
			<div
				style={{
					padding: "5%",
					backgroundColor: "#d3bec0c9",
					marginBottom: "2%"
				}}
				className="card-left">
				<div className="pic-flip">
					<Flippy
						flipOnHover={true} // default false
						// flipOnClick={true} // default false
						flipDirection="horizontal" // horizontal or vertical
						// ref={r => flippy.toggle()}
					>
						<div className="card-image">
							<FrontSide>
								<img src="https://images.unsplash.com/photo-1505935428862-770b6f24f629?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=747&q=80" />
							</FrontSide>
						</div>
						<div className="card-image2">
							<BackSide>
								<img src="https://images.unsplash.com/photo-1505934558824-08367d002416?ixlib=rb-1.2.1&auto=format&fit=crop&w=732&q=80" />
							</BackSide>
						</div>
					</Flippy>
				</div>
				<div
					style={{
						border: "2px solid white",
						// border: "2px solid rgb(175, 175, 175)",
						height: "300px",
						marginLeft: "2%"
					}}
					className="card-text">
					<h4
						style={{
							textAlign: "right",
							marginBottom: "4%"
						}}>
						Welcome to our new page!{" "}
					</h4>
					<p style={{ textAlign: "right" }}>
						WHATS NEW? <br />
						Hello and welcome to our new home.There is a new and totally improved recipe archive where you
						can see preview images of all the recipes and scroll or filter the categories. A much improved
						book section and a new video section. We will also be adding a shop later on that we are very
						excited about! Hope you will enjoy the new site! Big love!
					</p>
				</div>
			</div>
			<div
				style={{
					flexDirection: "column",
					// border: "2px solid black",
					// marginTop: "8%",
					padding: "7%",
					marginTop: "2%"
				}}
				className="card-top ">
				<div className="card-image">
					<img src="https://images.pexels.com/photos/1640770/pexels-photo-1640770.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" />
				</div>
				<div
					style={{
						border: "2px solid rgb(175, 175, 175)",
						height: "250px",
						marginTop: "3%"
					}}
					className="card-text">
					<h4>Recipes that work</h4>
					<p>
						There are two things we think about when deciding if a recipe is good enough to go on the site.
						First, does it work? Does the dish make us smile inside and out? Do we want to eat the whole
						batch by ourselves? Second, if the dish tastes great, is it worth the effort? Do we want to make
						it again (and again and again)?
					</p>
				</div>
			</div>
			<div
				style={{
					padding: "7%",
					marginTop: "2%",
					marginLeft: "0.5%"
				}}
				className="card-right">
				<div className="card-image w-75">
					<img src="https://images.pexels.com/photos/1927314/pexels-photo-1927314.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260" />
				</div>
				<div
					style={{
						border: "2px solid rgb(175, 175, 175)",
						height: "100%",
						margin: "1% 4% 2% 1% "
					}}
					className="card-text">
					<h4 className="card-head mb-4">Recipe testing</h4>
					<p>
						Since we are developing recipes in our home kitchens, all of our recipes are made with the home
						cook in mind. We want you to love our recipes as much as we do! <br /> <br />
						Since not every home kitchen is set up the same way, as of early 2017, we now do an extra round
						of recipe testing with a team of recipe testers who work from their home kitchens. They make and
						give feedback on each new recipe that goes up on Simply Recipes, making sure it’s perfect before
						it goes out the door..
						<br /> <br /> Our eating style: we eat a mostly whole food plant based diet. Most of the recipes
						you’ll see on this website are vegetarian or vegan, since about 90% of the time we eat that way.
						Our eating style is most similar to the Mediterranean diet, with lots of seasonal vegetables,
						whole grains, healthy fats, and olive oil. We’re passionate about buying local and organic where
						possible. Above all, we avoid rules-based eating and instead embrace the joy of eating good food
						with family and friends around the table
					</p>
				</div>
			</div>
			<div
				style={{
					flexDirection: "column",
					padding: "7%",
					marginTop: "2%",
					marginLeft: "2%"
				}}
				className="card-top">
				<div className="card-image">
					<img src="https://images.pexels.com/photos/1640773/pexels-photo-1640773.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" />
				</div>
				<div
					style={{
						border: "2px solid rgb(175, 175, 175)",
						height: "250px",
						marginTop: "3%"
					}}
					className="card-text">
					<h4>Where we get the recipes</h4>
					<p>
						We develop most of our recipes in-house (Simply Recipes staff and contributors), inspired by
						what is growing in the garden, and seasonal produce we find at the market. If we have pulled a
						recipe from another source, we do our best to attribute the source. The recipes we share use
						mostly whole food ingredients but we also believe there is a time and a place for healthy
						canned, frozen, and other prepared ingredients.
					</p>
				</div>
			</div>
			<div
				style={{
					padding: "5%",
					marginTop: "8%"
				}}
				className="card-bottom">
				<div className="card-image">
					<img src="https://images.pexels.com/photos/4038737/pexels-photo-4038737.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" />
				</div>
				<div
					style={{
						border: "2px solid rgb(175, 175, 175)",
						marginBottom: "5%"
					}}
					className="card-text">
					<h4 className="card-head mb-4"> Healthy Eating</h4>
					<p>
						The food you eat can affect your health and your risk for certain diseases. To eat healthier
						food, you may need to change some of your daily habits. You also may need to change some things
						in your environment. Your environment includes everything around you, like your home or the
						place you work.
						<br /> You dont need to make huge changes to eat healthier. And you dont have to change your
						habits all at the same time. Its best to set small goals and change your habits a little bit at
						a time. Over time, small changes can make a big difference in your health.
					</p>
				</div>
			</div>
			<div
				style={{
					padding: "5%",
					marginTop: "5%",
					marginLeft: "0.5%",
					backgroundColor: "#d3bec0c9"
				}}
				className="card-left">
				<div className="card-image">
					<img src="https://images.pexels.com/photos/1028598/pexels-photo-1028598.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260" />
				</div>
				<div
					style={{
						height: "100%",
						border: "2px solid white",
						marginLeft: "3%"
					}}
					className="card-text">
					<h4 className="card-head mb-4">Healthy Eating Lifestyle</h4>
					<p>
						Make half your plate fruits and vegetables
						<br />
						Choose red, orange, and dark-green vegetables along with other vegetables for your meals. Add
						fruit to meals as part of main or side dishes or as dessert. The more colorful you make your
						plate, the more likely you are to get the vitamins, minerals, and fiber your body needs to be
						healthy.
						<br />
						<br />
						Make half the grains you eat whole grains
						<br />
						Switch from a refined-grain food to a whole-grain food. For example, choose whole-wheat bread
						instead of white bread. Read the ingredients list and choose products that list a whole-grain
						ingredients first. Look for things like: “whole wheat,” “brown rice,” “bulgur,” “buckwheat,”
						“oatmeal,” “rolled oats,” quinoa,” or “wild rice.”
						<br />
						<br />
						Switch to fat-free or low-fat (1%) milk
						<br />
						Both have the same amount of calcium and other essential nutrients as whole milk, but fewer
						calories and less saturated fat.
						<br />
					</p>
				</div>
			</div>
			<div
				style={{
					padding: "5%",
					marginTop: "8%",
					marginLeft: "2%"
				}}
				className="card-bottom">
				<div className="card-image">
					<img src="https://images.pexels.com/photos/2865987/pexels-photo-2865987.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" />
				</div>
				<div
					style={{
						border: "2px solid rgb(175, 175, 175)",
						marginBottom: "5%"
					}}
					className="card-text">
					<h4 className="card-head mb-4">Changing Your Eating Habits</h4>
					<p>
						To eat a healthy diet, you may need to make some changes. Remember that you can change your
						eating habits a little bit at a time. Small changes are easier to make and can lead to better
						health.
						<br />
						Here are some ways to make healthy changes in your eating habits: <br />
						Keep more fruits, low-fat dairy products (low-fat milk and low-fat yogurt), vegetables, and
						whole-grain foods at home and at work. Focus on adding healthy food to your diet, rather than
						just taking unhealthy foods away.
						<br />
					</p>
				</div>
			</div>
			<div
				style={{
					padding: "7%",
					marginTop: "6%",
					marginLeft: "0.5%"
				}}
				className="card-right">
				<div className="card-image w-75">
					<img src="https://images.pexels.com/photos/4032978/pexels-photo-4032978.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" />
				</div>
				<div className="card-text">
					<h4>Maintaining a Healthy Lifestyle</h4>
					<p>
						To maintain your healthy eating habits, try the following tips. Add More Fruits Veggies Mix
						veggies into your go-to dishes. Swap meat for peppers and mushrooms in your tacos or try veggie
						pasta instead of grain pasta like one made out of black beans for more plant-based protein. Use
						fresh fruits and veggies whenever possible. Watch for sodium in canned veggies and look for
						canned fruit packed in water instead of syrup. Pack your child’s lunch bag with fruits and
						veggies: sliced apples, a banana or carrot sticks. Prepare Healthy Snacks Teach children the
						difference between everyday snacks such as fruits and veggies and occasional snacks such as
						cookies and sweets. Keep cut-up fruits and veggies like carrots, peppers, or orange slices in
						the refrigerator. Prepare your meals for the week by making them ahead on weekends or on a day
						off.
					</p>
				</div>
			</div>
			<div style={{ flexDirection: "column", marginTop: "14%", padding: "7%" }} className="card-top">
				<div className="card-image">
					<img src="https://images.pexels.com/photos/279376/pexels-photo-279376.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260" />
				</div>
				<div className="card-text">
					<p>Integer lacinia sollicitudin massa. Cras metus.</p>
				</div>
			</div>
			<div
				style={{
					marginTop: "8%",
					padding: "5%",
					marginLeft: "0.5%",
					backgroundColor: "#d3bec0c9"
				}}
				className="card-left">
				<div className="card-image">
					<img src="https://images.pexels.com/photos/262577/pexels-photo-262577.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260" />
				</div>
				<div className="card-text">
					<p>Ut eu diam at pede suscipit sodales.</p>
				</div>
			</div>
			<div
				style={{ flexDirection: "column", marginTop: "14%", padding: "7%", marginLeft: "2%" }}
				className="card-top">
				<div className="card-image">
					<img src="https://images.pexels.com/photos/978342/pexels-photo-978342.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260" />
				</div>
				<div className="card-text">
					<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
				</div>
			</div>
			<div style={{ marginTop: "18%", padding: "7%" }} className="card-bottom">
				<div className="card-image">
					<img src="https://images.pexels.com/photos/305831/pexels-photo-305831.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260" />
				</div>
				<div className="card-text">
					<p>Quisque cursus, metus vitae pharetra auctor.</p>
				</div>
			</div>
			<div
				style={{ flexDirection: "column", marginTop: "18%", padding: "7%", marginLeft: "2%" }}
				className="card-top">
				<div className="card-image">
					<img src="https://images.pexels.com/photos/355728/pexels-photo-355728.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260" />
				</div>
				<div className="card-text">
					<p>Donec lacus nunc, viverra nec, blandit vel, egestas et, augue.</p>
				</div>
			</div>
		</div>
	);
};
