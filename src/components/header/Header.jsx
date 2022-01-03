import { useState } from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import chip from "../../resources/img/chip.svg";
import "./header.scss";

const Header = () => {
	const [active, setActive] = useState(false);

	const onToggle = (e) => {
		e.preventDefault();
		setActive(!active);
		active
			? (document.body.style.overflow = "scroll")
			: (document.body.style.overflow = "hidden");
	};

	return (
		<header className="header">
			<div className="container">
				<div className="header__wrapper">
					<div className="header__logo">
						<img src={chip} alt="Header logo" />
					</div>
					<div
						className="header__menu"
						onClick={(e) => {
							onToggle(e);
						}}
					>
						<div className={`header__hamburger ${active ? "active" : ""}`}>
							<svg viewBox="0 0 800 600">
								<path
									d="M300,220 C300,220 520,220 540,220 C740,220 640,540 520,420 C440,340 300,200 300,200"
									className="top"
								></path>
								<path d="M300,320 L540,320" className="middle"></path>
								<path
									d="M300,210 C300,210 520,210 540,210 C740,210 640,530 520,410 C440,330 300,190 300,190"
									className="bottom"
									transform="translate(480, 320) scale(1, -1) translate(-480, -318) "
								></path>
							</svg>
						</div>
					</div>
					<nav className={`header__nav ${active ? "header__nav_active" : ""}`}>
						<ul className="header__list">
							<li className="header__item">
								<Link
									to="/"
									className="header__link"
									onClick={() => {
										onToggle();
									}}
								>
									Home
								</Link>
							</li>
							<li className="header__item">
								<Link
									to="/marvel"
									className="header__link"
									onClick={() => {
										onToggle();
									}}
								>
									Marvel
								</Link>
							</li>
							<li className="header__item">
								<Link
									to="/tic-tac-toe"
									className="header__link"
									onClick={() => {
										onToggle();
									}}
								>
									Tic tac toe
								</Link>
							</li>
							<li className="header__item">
								<Link
									to="/employees-list"
									className="header__link"
									onClick={() => {
										onToggle();
									}}
								>
									Employees list
								</Link>
							</li>
						</ul>
					</nav>
				</div>
			</div>
		</header>
	);
};

export default Header;
