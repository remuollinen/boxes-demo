import React, { Component } from "react";
import Box from "./Box";

class MainC extends Component {
	state = {
		persons: [
			{ name: "Maria", age: 29, title: "CEO" },
			{ name: "Kati", age: 25, title: "Developer" },
			{ name: "Leila", age: 45, title: "Designer" },
		],
	};

	changeNameHandler = () => {
		console.log("WOW");
	};

	render() {
		return (
			<main>
				<button onClick={this.changeNameHandler}>Click me!</button>
				<ul>
					{this.state.persons.map((person) => (
						<li>
							{person.name} is {person.age} old and is a {person.title}
						</li>
					))}
				</ul>
			</main>
		);
	}
}

export default MainC;
