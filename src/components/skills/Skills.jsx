import "./skils.css";
import ReactImg from "./../../img/icons/React.svg";
import JavaScriptImg from "./../../img/icons/Javascript.svg";
import TypeScriptImg from "./../../img/icons/TypeScript.svg";
import NextjsImg from "./../../img/icons/Nextjs.svg";
import Html3mg from "./../../img/icons/html3.svg";
import Html5Img from "./../../img/icons/HTML5.svg";
import FigmaImg from "./../../img/icons/Figma.svg";
import GitHubImg from "./../../img/icons/Github2.svg";
import ShapeImg from "./../../img/icons/Shape.svg";
import InsomniaImg from "./../../img/icons/Insomnia.svg";

const Skills = () => {
  return (
    <section className="skills">
      <div className="container">
        <div className="skills__content">
          <div className="skills__text">
            <div className="skills__title">Технологии и навыки</div>
          </div>
          <div className="skills__technology">
            <div className="skills__technology-title">
              Techs que uso no dia a dia
            </div>
            <ul>
              <li>
                <img src={ReactImg} alt="React" />
              </li>
              <li>
                <img src={JavaScriptImg} alt="JavaScript" />
              </li>
              <li>
                <img src={TypeScriptImg} alt="TypeScript" />
              </li>
              <li>
                <img src={NextjsImg} alt="NextJs" />
              </li>
              <li>
                <img src={Html3mg} alt="HTML" />
              </li>
              <li>
                <img src={Html5Img} alt="HTNL5" />
              </li>
              <li>
                <img src={FigmaImg} alt="Figma" />
              </li>
              <li>
                <img src={GitHubImg} alt="GitHub" />
              </li>
              <li>
                <img src={ShapeImg} alt="Shape" />
              </li>
              <li>
                <img src={InsomniaImg} alt="Insomnia" />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
