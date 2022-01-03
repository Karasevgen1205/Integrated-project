import cv from "../../resources/img/CV-2021.svg";
import "./home.scss";

const Home = () => {
  return (
    <div className="home">
      <div className="container">
        <div className="img">
          <img src={cv} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Home;
