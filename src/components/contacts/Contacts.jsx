import "./contacts.css";

import CopySimpleImg from "./../../img/icons/CopySimple.svg";

const Contacts = () => {
  return (
    <section className="contacts">
      <div className="container">
        <div className="contacts__content">
          <div className="contacts__text">
            <div className="contacts__text-title">Давайте поговорим</div>
          </div>
          <div className="contacts__content-btns">
            <div className="contacts__whatsapp">
              <a href="#!">Давайте поговорим</a>
            </div>
            <div className="contacts__email">
              <span>E-mail:</span>
              <br />
              henriquesousa.dev@gmail.com
              <br />
              <img src={CopySimpleImg} alt="Qopy" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contacts;
