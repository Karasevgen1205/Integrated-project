import { Component } from "react";
import PropTypes from "prop-types";

import MarvelService from "../../services/MarvelService";
import Spinner from "../spinner/Spinner";
import ErrorMessage from "../errorMessage/ErrorMessage";
import Skeleton from "../skeleton/Skeleton";
import "./charInfo.scss";

class CharInfo extends Component {
	state = {
		char: null,
		loading: false,
		error: false,
	};

	marvelService = new MarvelService();

	componentDidMount() {
		this.updateChar();
	}

	componentDidUpdate(prevProps) {
		if (this.props.charId !== prevProps.charId) {
			this.updateChar();
		}
	}

	updateChar = () => {
		const { charId } = this.props;
		if (!charId) {
			return;
		}

		this.onCharLoading();
		this.marvelService
			.getCharacter(charId)
			.then(this.onCharLoaded)
			.catch(this.onError);
	};

	onCharLoaded = (char) => {
		this.setState({
			char,
			loading: false,
			error: false,
		});
	};

	onCharLoading = () => {
		this.setState({
			loading: true,
			error: false,
		});
	};

	onError = () => {
		this.setState({
			loading: false,
			error: true,
		});
	};

	render() {
		const { char, loading, error } = this.state;
		const skeleton = char || loading || error ? null : <Skeleton />;
		const errorMessage = error ? <ErrorMessage /> : null;
		const spinner = loading ? <Spinner /> : null;
		const content = !(loading || error || !char) ? <View char={char} /> : null;

		return (
			<div className="char__info">
				{skeleton}
				{errorMessage}
				{spinner}
				{content}
			</div>
		);
	}
}

const View = ({ char }) => {
	const { name, description, thumbnail, homepage, wiki, comics } = char;
	let imgStyle = { objectFit: "cover" };
	if (
		thumbnail ===
		"http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg"
	) {
		imgStyle = { objectFit: "contain" };
	}

	return (
		<>
			<div className="char__basics">
				<img src={thumbnail} alt={name} style={imgStyle} />
				<div>
					<div className="char__info-name">{name}</div>
					<div className="char__btns">
						<a href={homepage} className="button button__main">
							<div className="inner">homepage</div>
						</a>
						<a href={wiki} className="button button__secondary">
							<div className="inner">Wiki</div>
						</a>
					</div>
				</div>
			</div>
			<p className="char__descr">{description}</p>
			<p className="char__comics">Comics:</p>
			<ul className="char__comics-list">
				{comics.length === 0 ? "There are no comics here" : null}
				{comics.map((item, i) => {
					if (i < 10) {
						return (
							<li className="char__comics-item" key={i}>
								<p>{item.name}</p>
							</li>
						);
					}
				})}
			</ul>
		</>
	);
};

CharInfo.defaultProps = {
	charId: 210,
};

CharInfo.propTypes = {
	charId: PropTypes.number,
};

export default CharInfo;
