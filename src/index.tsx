import React from "react";
import ReactDOM from "react-dom";
import App from "./components/app/App";
import "./style/style.scss";
import "./style/style.scss";
import reportWebVitals from "./reportWebVitals";

ReactDOM.render(
	<React.StrictMode>
		<App />
	</React.StrictMode>,
	document.getElementById("root")
);

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
interface IAppFilterProps {
	category: string;
	onChangeBtn: (item: string) => void;
}
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
