import "./square.scss";

interface ISquare {
	value: string;
	onClick: () => void;
}

const Square = ({ value, onClick }: ISquare) => {
	return (
		<button className="square" onClick={onClick}>
			{value}
		</button>
	);
};

export default Square;
