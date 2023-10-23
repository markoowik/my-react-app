import "./footer.css";

import LinkedinImg from "./../../img/icons/linkedin.svg";
import GiHubImg from "./../../img/icons/github.svg";
import BehanceImg from "./../../img/icons/behance.svg";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__content">
          <div className="footer__text">
            <div className="footer__desc">
              Copyright © Henrique Sousa · 2022
            </div>
          </div>
          <div className="footer__links">
            <div className="footer__img">
              <a href="#!">
                <img src={LinkedinImg} alt="" />
              </a>
              <a href="#!">
                <img src={GiHubImg} alt="" />
              </a>
              <a href="#!">
                <img src={BehanceImg} alt="" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
