import React from "react";
import Test from "./test";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import logo from "./logo.svg";
import "./App.scss";

let a: number = 10;
let b: string = "he";
let d: number | string = 22;
let c: boolean | null = true;

const names: Array<string | number> = ["hi", "not", "red", 0];
const names2: string[] = ["hi", "not", "red"];

let sex: "male" | "female";
sex = "male";

const obj: UserType = {
	sayHello(message: string) {
		console.log(message);
	},
	name: "jon",
	age: 32,
	sex: "mile",
	children: true,
	address: {
		city: "Minsk",
		country: "Belarus",
	},
};

type AddressType = {
	city: string;
	country: string;
};

type UserType = {
	sayHello: Function;
	name: string;
	age: number;
	sex: "mile" | "famile";
	children: boolean;
	address: AddressType | null;
};

console.log(names[0]);

function App() {
	return (
		<Router>
			<div className="App">
				<header className="App-header">
					<Link to="/test">Test</Link>
					<h1>Test</h1>
					<img src={logo} className="App-logo" alt="logo" />
					<p>
						Edit <code>src/App.tsx</code> and save to reload.
					</p>
					<a
						className="App-link"
						href="https://reactjs.org"
						target="_blank"
						rel="noopener noreferrer"
					>
						Learn React
					</a>
				</header>
				<Routes>
					<Route path="/test" element={<Test />} />
				</Routes>
			</div>
		</Router>
	);
}

export default App;
