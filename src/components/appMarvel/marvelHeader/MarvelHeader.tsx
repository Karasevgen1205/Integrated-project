import React from "react";
import "./marvelHeader.scss";

const MarvelHeader: React.FC = () => {
  return (
    <section className="marvel-header">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="marvel-header__wrapper">
              <h1 className="marvel-header__title">
                <a href="#">
                  <span>Marvel</span> information portal
                </a>
              </h1>
              <nav className="marvel-header__menu">
                <ul>
                  <li>
                    <a href="#">Characters</a>
                  </li>
                  /
                  <li>
                    <a href="#">Comics</a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MarvelHeader;
