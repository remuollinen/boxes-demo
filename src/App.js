import React from "react";
import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Main from "./components/Main";
// import MainC from "./components/MainC";
import { BrowserRouter as Router } from "react-router-dom";

function App() {
	return (
		<div className="App">
			<Router>
				<Header />
				<Main />
				<Footer />
			</Router>
		</div>
	);
}

export default App;
