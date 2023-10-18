import "./welcome.css";

import LinkedinImg from "./../../img/icons/linkedin.svg";
import GiHubImg from "./../../img/icons/github.svg";
import BehanceImg from "./../../img/icons/behance.svg";
import AvatarImg from "../../img/image/AvatarAndIcons.svg";
const Welcome = () => {
  return (
    <section className="welcome">
      <div className="container">
        <div className="welcome__content">
          <div className="welcome__text">
            <div className="welcome__title">Alisher Serik</div>
            <div className="welcome__inner">Front-end developer</div>
            <div className="welcome__icons">
              <ul>
                <li>
                  <a href="#!">
                    <img src={LinkedinImg} alt="Linkedin" />
                  </a>
                </li>
                <li>
                  <a target="_black" href="https://github.com/markoowik">
                    <img src={GiHubImg} alt="GitHub" />
                  </a>
                </li>
                <li>
                  <a href="#!">
                    <img src={BehanceImg} alt="Behance" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="welcome__img">
            <img src={AvatarImg} alt="" />
          </div>
          <div className="welcome__content">
            <div className="download__content">
              <div className="download__cv">
                <a href="#!">Скачать CV</a>
              </div>
              <div className="welcome__whatsapp">
                <a href="#!">Давайте поговорим</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Welcome;
