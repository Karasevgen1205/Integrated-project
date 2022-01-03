import PropTypes from "prop-types";
import "./info.scss";

const Info = ({ status, moves }) => {
	return (
		<div className="info">
			<span className="info__title">{status}</span>
			<ul className="info__list">{moves}</ul>
		</div>
	);
};

Info.defaultProps = {
	status: "",
	moves: [],
};

Info.propTypes = {
	status: PropTypes.string,
	moves: PropTypes.array,
};

export default Info;
