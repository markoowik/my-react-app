import "./information.css";

import CodeIconImg from "./../../img/icons/CodeIcon.svg";
import ProjectsIconImg from "./../../img/icons/ProjectsIcon.svg";

const Information = () => {
  return (
    <section className="information">
      <div className="container">
        <div className="information__content">
          <div className="information__cards">
            <div className="information__card">
              <div className="information__img">
                <img src={CodeIconImg} alt="" />
              </div>
              <div className="information__desc">3 anos como</div>
              <div className="information__title">Programador</div>
            </div>
            <div className="information__card">
              <div className="information__img">
                <img src={ProjectsIconImg} alt="" />
              </div>
              <div className="information__desc">3 anos como</div>
              <div className="information__title">Programador</div>
            </div>
            <div className="information__card">
              <div className="information__img">
                <img src={CodeIconImg} alt="" />
              </div>
              <div className="information__desc">3 anos como</div>
              <div className="information__title">Programador</div>
            </div>
          </div>
          <div className="infomation__cards-texts">
            <div className="infomation__cards-text">
              <div className="information__cards-text-desc">Desenvolvedor</div>
              <div className="information__cards-text-title">Front-end</div>
            </div>
            <div className="infomation__cards-text">
              <div className="information__cards-text-desc">Desenvolvedor</div>
              <div className="information__cards-text-title">Front-end</div>
            </div>
            <div className="infomation__cards-text">
              <div className="information__cards-text-desc">Desenvolvedor</div>
              <div className="information__cards-text-title">Front-end</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Information;
