import "./info.scss";

interface IInfo {
	status: string;
	moves: object[];
}

const Info = ({ status, moves }: IInfo) => {
	return (
		<div className="info">
			<span className="info__title">{status}</span>
			<ul className="info__list">{moves}</ul>
		</div>
	);
};

export default Info;
