import React from "react";
const Box = (props) => {
	const changeNameHandler = () => {
		console.log("WOW from box");
	};

	return (
		<div className="box">
			<h2>{props.name}</h2>
			<p>Title: {props.title}</p>
			<p>Age: {props.age}</p>
			<button onClick={changeNameHandler}>Click me!</button>
		</div>
	);
};

export default Box;
