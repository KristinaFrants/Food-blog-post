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
						style={{ border: "" }}
						flipOnHover={true} // default false
						// flipOnClick={true} // default false
						flipDirection="vertical" // horizontal or vertical
						// ref={r => flippy.toggle()}
					>
						<div className="card-image">
							<FrontSide>
								<img src="https://images.unsplash.com/photo-1505935428862-770b6f24f629?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=747&q=80" />
							</FrontSide>
						</div>
						<div className="card-image2 ">
							<BackSide
								style={{
									// padding: "1em",
									border: "2px solid d3bec0c9",
									borderRadius: "1px",
									boxShadow: "0px 3px 9px 1px rgba(185, 45, 57, 0.2)",
									width: "60%"
								}}>
								<img
									style={{
										width: "100%",
										height: "98%"
									}}
									src="https://images.unsplash.com/photo-1505934558824-08367d002416?ixlib=rb-1.2.1&auto=format&fit=crop&w=732&q=80"
								/>
							</BackSide>
						</div>
					</Flippy>
				</div>
				<div
					style={{
						border: "2px solid white",
						// border: "2px solid rgb(175, 175, 175)",
						height: "300px",
						marginLeft: "2%",
						width: "850px"
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
				<div
					style={{
						border: "2px solid rgb(175, 175, 175)",
						marginRight: "5%",
						height: "100%"
					}}
					className="card-text">
					<h4 className="card-head mb-4">Maintaining a Healthy Lifestyle</h4>
					<p>
						To maintain your healthy eating habits, try the following tips. Add More Fruits Veggies Mix
						veggies into your go-to dishes. Swap meat for peppers and mushrooms in your tacos or try veggie
						pasta instead of grain pasta like one made out of black beans for more plant-based protein.{" "}
						<br />
						<br />
						Use fresh fruits and veggies whenever possible. Watch for sodium in canned veggies and look for
						canned fruit packed in water instead of syrup. <br />
						Pack your child’s lunch bag with fruits and veggies: sliced apples, a banana or carrot sticks.
						Prepare Healthy Snacks Teach children the difference between everyday snacks such as fruits and
						veggies and occasional snacks such as cookies and sweets. <br />
						<br />
						Keep cut-up fruits and veggies like carrots, peppers, or orange slices in the refrigerator.
						Prepare your meals for the week by making them ahead on weekends or on a day off.
					</p>
				</div>
			</div>
			<div style={{ flexDirection: "column", marginTop: "14%", padding: "7%" }} className="card-top">
				<div className="card-image">
					<img src="https://images.pexels.com/photos/4050990/pexels-photo-4050990.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" />
				</div>
				<div
					style={{
						border: "2px solid rgb(175, 175, 175)",
						marginTop: "3%"
					}}
					className="card-text">
					<h4 className="card-head mb-4">Reduce Fat, Salt, and Sugar</h4>
					<p>
						When eating out, choose baked or grilled food instead of fried and do the same at home.
						<br />
						Make water your go-to drink instead of soda or sweetened beverages.
						<br />
						Read labels on packaged ingredients to find foods lower in sodium.
						<br />
						Reduce amounts of salt added to food when cooking and use herbs and spices instead to add flavor
						like paprika, turmeric, black pepper, garlic or onion powder.
					</p>
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
					<img src="https://images.pexels.com/photos/3233277/pexels-photo-3233277.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" />
				</div>
				<div
					style={{
						border: "2px solid white",
						marginLeft: "3%",
						height: "100%"
					}}
					className="card-text">
					<h4 className="card-head mb-4">Healthy Snacking</h4>
					<p>
						Enjoying a healthy snack can be a great way to boost your energy, curb cravings, and prevent the
						hangries by keeping you feeling full throughout the day.
						<br />
						<br />
						Often, we may be tempted to reach for a quick snack from the vending machine or convenience
						store. But if we give in to temptation, we’ll end up with a snack that contains added sugars and
						empty calories. Avoid this by preparing snacks at home for the week and carrying them with you.
						Or purchase simple, ready-made snacks to leave in your desk drawer. These strategies ensure you
						have a smart snack at your fingertips when the time comes.
						<br />
						<br />
						Preparing snacks ahead of time also helps you adhere to the serving size of your snack item and
						avoid overeating. For example, if you are taking whole-grain crackers and the serving size is 14
						crackers, put just that amount in a small bag or container.
					</p>
				</div>
			</div>
			<div
				style={{ flexDirection: "column", marginTop: "14%", padding: "7%", marginLeft: "2%" }}
				className="card-top">
				<div className="card-image">
					<img src="https://images.pexels.com/photos/3933207/pexels-photo-3933207.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" />
				</div>
				<div
					style={{
						border: "2px solid rgb(175, 175, 175)",
						marginTop: "3%"
					}}
					className="card-text">
					<h4>Control Portion Sizes</h4>
					<p>
						When preparing meals at home, use smaller plates.
						<br />
						Don’t clean your plate if you’re full, instead save leftovers for tomorrow’s lunch.
						<br />
						Portion sizes depend on the age, gender, and activity level of the individual.
						<br />
						Bring healthy snacks into your child’s classroom for birthday parties and holiday celebrations,
						instead of providing sugary treats.
						<br />
						Pack healthy lunches for children including whole grains, fruits and veggies.
					</p>
				</div>
			</div>
			<div style={{ marginTop: "18%", padding: "7%" }} className="card-bottom">
				<div className="card-image">
					<img src="https://images.pexels.com/photos/1171170/pexels-photo-1171170.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" />
				</div>
				<div
					style={{
						border: "2px solid rgb(175, 175, 175)",
						marginBottom: "3%",
						height: "100%"
					}}
					className="card-text">
					<h4 className="card-head mb-4">What should you snack on?</h4>
					<p>
						Don’t be afraid to add variety in your snacks. Choosing a nutrient-rich and satisfying snack is
						key. Enjoy a healthy carbohydrate and a high-protein item! Or keep things simple with pieces of
						fruit or a hard-boiled egg. Stay away from high-fat snacks that leave you unsatisfied – like
						fried potato chips or items with “empty calories,” such as sodas or candy bars. Here are some
						quick, delicious snack ideas to stop the hangries and fuel your day:
						<br />
						Crackers and a cheese stick
						<br />
						Greek yogurt and sliced vegetables
						<br />
						Hummus and carrot chips
					</p>
				</div>
			</div>
			<div
				style={{ flexDirection: "column", marginTop: "18%", padding: "7%", marginLeft: "2%" }}
				className="card-top">
				<div className="card-image">
					<img src="https://images.pexels.com/photos/2616716/pexels-photo-2616716.png?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" />
				</div>
				<div
					style={{
						border: "2px solid rgb(175, 175, 175)",
						marginTop: "3%",
						height: "100%"
					}}
					className="card-text">
					<h4 className="text-head mb-4">When should you snack?</h4>
					<p>
						It’s important to avoid snacking mindlessly during the day. Have a snack to tide you over until
						your next meal or snack towards the end of the workday to boost your energy for evening errands
						or family activities. Here are some intentional times to enjoy your snacks:
						<br />
						<br />
						Before a big meeting to help you stay focused
						<br />
						Toward the end of your workday to fuel your evening errands and family activities before dinner
						<br />
						Midmorning or midafternoon when your energy starts to slump
					</p>
				</div>
			</div>
		</div>
	);
};
