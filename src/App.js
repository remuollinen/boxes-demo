import "./App.css";
import Box from "./Box";

function App() {
	return (
		<div className="App">
			<header>
				<h1>Logo</h1>
			</header>
			<main>
				<Box name="Maria" title="CEO" age="29" />
				<Box name="Kati" title="Developer" age="25" />
				<Box name="Katrin" title="Designer" age="45" />
			</main>
			<footer>
				<p>Copyrights</p>
			</footer>
		</div>
	);
}

export default App;
