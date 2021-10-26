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
				{this.state.persons.map((person) => (
					<Box name={person.name} age={person.age} title={person.title} />
				))}
			</main>
		);
	}
}

export default MainC;
