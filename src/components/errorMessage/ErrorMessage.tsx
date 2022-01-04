import img from "../errorMessage/error.gif";
import "./errorMessage.scss";

const ErrorMessage = () => {
	return (
		// <img src={process.env.PUBLIC_URL + "/error.gif"} alt="Error message" />
		<img className="error-message" src={img} alt="Error message" />
	);
};

export default ErrorMessage;
