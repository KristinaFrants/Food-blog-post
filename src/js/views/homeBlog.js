import React from "react";
import { Link } from "react-router-dom";
import "./homeBlog.css";
import Card from "react-bootstrap/Card";
import CardColumns from "react-bootstrap/CardColumns";

export const HomeBlog = () => {
	return (
		<div className="row homeBlog mt-4 mr-4 ml-4">
			<div className="col homeBlog__header">
				<i>
					<h3
						style={{
							marginTop: "2%",
							marginBottom: "5%",
							fontSize: "60px"
						}}>
						Eating Healthy
					</h3>
				</i>
			</div>

			<CardColumns>
				<Card className="homeBlog__cards">
					<Card.Img
						className="homeBlog__img"
						variant="top"
						src="https://images.unsplash.com/photo-1546520057-a59c8dcde13b?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=582&q=80"
					/>
					<Card.Body>
						<Card.Title>Recipes that work</Card.Title>
						<hr />
						<Card.Text>
							<i>
								There are two things we think about when deciding if a recipe is good enough to go on
								the site. First, does it work? Does the dish make us smile inside and out? Do we want to
								eat the whole batch by ourselves? Second, if the dish tastes great, is it worth the
								effort? Do we want to make it again (and again and again)?
							</i>
						</Card.Text>
					</Card.Body>
				</Card>
				<Card className="ml-2 homeBlog__cards">
					<blockquote className="blockquote mb-0 card-body">
						<p>
							Since not every home kitchen is set up the same way, as of early 2017, we now do an extra
							round of recipe testing with a team of recipe testers who work from their home kitchens.
							They make and give feedback on each new recipe that goes up on Simply Recipes, making sure
							it’s perfect before it goes out the door..
						</p>
						<footer className="blockquote-footer">
							<small className="text-muted">
								The Simple Veganista <cite title="Source Title">Source</cite>
							</small>
						</footer>
					</blockquote>
				</Card>
				<Card className="text-center ml-2 homeBlog__cards">
					<Card.Body>
						<Card.Title>Snackng Healthy</Card.Title>
						<hr />
						<Card.Text>
							<i>
								Often, we may be tempted to reach for a quick snack from the vending machine or
								convenience store. But if we give in to temptation, we’ll end up with a snack that
								contains added sugars and empty calories. Avoid this by preparing snacks at home for the
								week and carrying them with you.
							</i>
						</Card.Text>
					</Card.Body>
				</Card>
				<Card className="homeBlog__cards mr-1">
					<Card.Img
						className="homeBlog__img"
						variant="top"
						src="https://images.unsplash.com/photo-1519897831810-a9a01aceccd1?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=889&q=80"
					/>
					<Card.Body>
						<Card.Title>Eating Clean</Card.Title>
						<hr />
						<Card.Text>
							<i>
								Our eating style: we eat a mostly whole food plant based diet. Most of the recipes
								you’ll see on this website are vegetarian or vegan, since about 90% of the time we eat
								that way. Our eating style is most similar to the Mediterranean diet, with lots of
								seasonal vegetables, whole grains, healthy fats, and olive oil. We’re passionate about
								buying local and organic where possible. Above all, we avoid rules-based eating and
								instead embrace the joy of eating good food with family and friends around the table{" "}
							</i>
						</Card.Text>
					</Card.Body>
				</Card>
				<Card bg="success" text="white" className="text-center mr-4 homeBlog__cards">
					<blockquote className="blockquote mb-0 card-body">
						<p>
							We develop most of our recipes in-house inspired by what is growing in the garden, and
							seasonal produce we find at the market. If we have pulled a recipe from another source, we
							do our best to attribute the source.
						</p>
						<footer className="blockquote-footer">
							<small className="text-muted">
								The Simple Veganista <cite title="Source Title">Source </cite>
							</small>
						</footer>
					</blockquote>
				</Card>
				<Card className="homeBlog__cards">
					<Card.Img src="https://images.unsplash.com/photo-1567261582622-3845a517ed51?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=667&q=80" />
				</Card>
				<Card className="text-center homeBlog__cards">
					<Card.Body>
						<Card.Title>Support your Health</Card.Title>
						<hr />
						<Card.Text>
							<i>
								To eat healthier food, you may need to change some of your daily habits. You also may
								need to change some things in your environment. Your environment includes everything
								around you, like your home or the place you work.
							</i>
						</Card.Text>
						<Card.Text>
							<small className="text-muted">Last updated 3 mins ago</small>
						</Card.Text>
					</Card.Body>
				</Card>
				<Card className="homeBlog__cards">
					<Card.Img src="https://images.unsplash.com/photo-1587390048380-c52e88399ca0?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=889&q=80" />
				</Card>
				<Card className="text-right homeBlog__cards">
					<blockquote className="blockquote mb-0 card-body">
						<p>
							You dont need to make huge changes to eat healthier. And you dont have to change your habits
							all at the same time. Its best to set small goals and change your habits a little bit at a
							time. Over time, small changes can make a big difference in your health.
						</p>
						<footer className="blockquote-footer">
							<small className="text-muted">
								The Simple Veganista
								<cite title="Source Title">Source</cite>
							</small>
						</footer>
					</blockquote>
				</Card>
				<Card className="text-center homeBlog__cards">
					<Card.Body>
						<Card.Title>Eating Habits</Card.Title>
						<hr />
						<Card.Text>
							<i>
								Keep more fruits, low-fat dairy products (low-fat milk and low-fat yogurt), vegetables,
								and whole-grain foods at home and at work. Focus on adding healthy food to your diet,
								rather than just taking unhealthy foods away.
							</i>
						</Card.Text>
					</Card.Body>
				</Card>
			</CardColumns>
		</div>
	);
};
