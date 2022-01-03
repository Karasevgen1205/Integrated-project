import React, { Component } from "react";
import Board from "../board/Board";
import Info from "../info/Info";
import calculateWinner from "../../../services/calculateWinner";
import "./game.scss";

class Game extends Component {
	constructor(props) {
		super(props);
		this.state = {
			history: [
				{
					squares: Array(9).fill(null),
				},
			],
			stepNumber: 0,
			xIsNext: true,
		};
	}

	handleClick(i) {
		const history = this.state.history.slice(0, this.state.stepNumber + 1);
		const current = history[history.length - 1];
		const squares = current.squares.slice();
		if (calculateWinner(squares) || squares[i]) {
			return;
		}
		squares[i] = this.state.xIsNext ? "X" : "O";
		this.setState({
			history: history.concat([
				{
					squares: squares,
				},
			]),
			stepNumber: history.length,
			xIsNext: !this.state.xIsNext,
		});
	}

	jumpTo(step) {
		this.setState({
			stepNumber: step,
			xIsNext: step % 2 === 0,
		});
	}

	render() {
		const history = this.state.history;
		const current = history[this.state.stepNumber];
		const winner = calculateWinner(current.squares);

		const moves = history.map((step, move) => {
			const desc = move ? "Go to move #" + move : "Go to game start";
			return (
				<li key={move} className="info__item">
					<button onClick={() => this.jumpTo(move)}>{desc}</button>
				</li>
			);
		});

		let status;
		if (winner) {
			status = "Winner: " + winner;
		} else {
			status = "Next player: " + (this.state.xIsNext ? "X" : "O");
		}

		return (
			<section className="game">
				<div className="container">
					<div className="row">
						<div className="col-12">
							<div className="game__wrapper">
								<Board
									squares={current.squares}
									onClick={(i) => this.handleClick(i)}
								/>
								<Info status={status} moves={moves} />
							</div>
						</div>
					</div>
				</div>
			</section>
		);
	}
}

export default Game;
