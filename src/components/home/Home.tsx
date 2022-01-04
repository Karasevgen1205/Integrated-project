import cv from "../../resources/img/CV-2021.svg";
import "./home.scss";

const Home: React.FC = () => {
	return (
		<div className="home">
			<div className="container">
				<div className="home__img">
					<img src={cv} alt="CV" />
				</div>
			</div>
		</div>
	);
};

export default Home;
