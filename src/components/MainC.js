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
				<Box
					name={this.state.persons[0].name}
					title={this.state.persons[0].title}
					age={this.state.persons[0].age}
				/>
				<Box
					name={this.state.persons[1].name}
					title={this.state.persons[1].title}
					age={this.state.persons[1].age}
				/>
				<Box
					name={this.state.persons[2].name}
					title={this.state.persons[2].title}
					age={this.state.persons[2].age}
				/>
				{/* {this.state.persons.map((person) => {
						return (
							<Box name={person.name} title={person.title} age={person.age} />
						);
					})} */}
				<button onClick={this.changeNameHandler}>Click me!</button>
			</main>
		);
	}
}

export default MainC;
