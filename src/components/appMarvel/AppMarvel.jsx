import { Component } from "react";
import AppHeader from "../appHeader/AppHeader";
import RandomChar from "../randomChar/RandomChar";
import CharList from "../charList/CharList";
import CharInfo from "../charInfo/CharInfo";
import ErrorBoundary from "../errorBoundary/ErrorBoundary";

import decoration from "../../resources/img/vision.png";
// import "./appMarvel.scss";

class AppMarvel extends Component {
	state = {
		selectedChar: null,
	};

	onCharSelected = (id) => {
		this.setState({ selectedChar: id });
	};

	render() {
		return (
			<>
				<ErrorBoundary>
					<AppHeader />
				</ErrorBoundary>
				<RandomChar />
				<section className="char-content">
					<div className="container">
						<div className="row">
							<div className="col-12">
								{/* make a mobile adaptation */}
								<div className="char__content">
									<ErrorBoundary>
										<CharList onCharSelected={this.onCharSelected} />
									</ErrorBoundary>
									<ErrorBoundary>
										<CharInfo charId={this.state.selectedChar} />
									</ErrorBoundary>
									<img
										className="bg-decoration"
										src={decoration}
										alt="vision"
									/>
								</div>
							</div>
						</div>
					</div>
				</section>
			</>
		);
	}
}

export default AppMarvel;
