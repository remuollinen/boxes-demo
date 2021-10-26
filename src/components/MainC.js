import React, { Component } from "react";
import Box from "./Box";

class MainC extends Component {
	state = {
		persons: [
			{ id: 1, name: "Maria", age: 29, title: "CEO" },
			{ id: 2, name: "Kati", age: 25, title: "Developer" },
			{ id: 3, name: "Leila", age: 45, title: "Designer" },
		],
	};

	changeNameHandler = () => {
		console.log("WOW");
	};

	render() {
		return (
			<main>
				{this.state.persons.map((person) => (
					<Box
						key={person.id}
						name={person.name}
						age={person.age}
						title={person.title}
					/>
				))}
			</main>
		);
	}
}

export default MainC;
