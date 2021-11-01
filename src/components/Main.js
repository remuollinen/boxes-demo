import React from "react";
import Box from "./Box";
import { NavLink, Switch, Route } from "react-router-dom";

const Home = () => {
	return (
		<div>
			<h1>This is the HOME page</h1>
		</div>
	);
};

const About = () => {
	return (
		<div>
			<h1>This is the ABOUT page</h1>
		</div>
	);
};

const Main = () => {
	return (
		<main>
			<nav>
				<ul>
					<li>
						<NavLink to="/">Home</NavLink>
					</li>
					<li>
						<NavLink to="/about">About</NavLink>
					</li>
				</ul>
			</nav>
			<Switch>
				<Route path="/" exact component={Home} />
				<Route path="/about" exact component={About} />
			</Switch>

			<Box name="Maria" title="CEO" age="29" />
			<Box name="Kati" title="Developer" age="25" />
			<Box name="Katrin" title="Designer" age="45" />
		</main>
	);
};

export default { Main, Home, About };
