import "./about.css";

import ProfileImg from "./../../img/image/ProfilePic.png";

const About = () => {
  return (
    <section className="about">
      <div className="container">
        <div className="about__content">
          <div className="about__img">
            <img src={ProfileImg} alt="Profile" />
          </div>
          <div className="about__text">
            <div className="about__title">Aisher Serik</div>
            <div className="about__inner">
              👋 Me chamo Washington Henrique Fernandes de Sousa, mas pode me
              chamar apenas de Henrique. Prazer!
              <br /> <br />
              👨‍💻 Há mais de 2 anos desenvolvendo e programando interfaces com
              JavaScript, React JS e Typescript. <br />
              🎓 Graduado em Análise e Desenvolvimento de Sistemas pela Fatec de
              São José dos Campos <br />
              💡 Interesses em desenvolvimento Front-end com React, React
              Native, VueJS e UX/UI Design.
              <br />
              <br /> 🚀 Tentando ser um pouquinho melhor do que ontem todos
              dias.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
