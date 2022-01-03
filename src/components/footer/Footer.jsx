import rabota from "../../resources/img/rabota.svg";
import smartr from "../../resources/img/smartr.svg";
import linkedin from "../../resources/img/linkedin.svg";
import github from "../../resources/img/github.svg";
import "./footer.scss";

const Footer = () => {
	return (
		<footer className="footer">
			<div className="container">
				<div className="row">
					<div className="col-12">
						<div className="footer__wrapper">
							<div className="footer__social">
								<div className="footer__email">
									<a href="mailt:karasevgen1205@gmail.com">
										Karasevgen1205@gmail.com
									</a>
								</div>
								<ul className="footer__links">
									<li className="footer__item">
										<a
											className="footer__link"
											href="https://www.linkedin.com/in/evgeny-karas-58aa001b9"
										>
											<img src={linkedin} alt="" />
										</a>
									</li>
									<li className="footer__item">
										<a
											className="footer__link"
											href="https://github.com/Karasevgen1205"
										>
											<img src={github} alt="" />
											<span>GitHub</span>
										</a>
									</li>
									<li className="footer__item">
										<a
											className="footer__link"
											href="https://www.smartr.me/public/profiles/evgeny.karas"
										>
											<img src={smartr} alt="" />
										</a>
									</li>
									<li className="footer__item">
										<a
											className="footer__link"
											href="https://rabota.by/resume/2bbc58d7ff08479f450039ed1f4a454c345a65"
										>
											<img src={rabota} alt="" />
										</a>
									</li>
								</ul>
							</div>
							<div className="footer__title">
								<h1>The information is current as of 12/29/2021</h1>
							</div>
						</div>
					</div>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
