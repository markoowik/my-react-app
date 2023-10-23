import "./reviews.css";

import WorkOptionsImg from "./../../img/icons/WorkOptions.svg";
import WorkOptionsImg2 from "./../../img/icons/WorkOptions2.svg";
import QuotesImg from "./../../img/icons/Quotes.svg";

const Reviews = () => {
  return (
    <section className="reviews">
      <div className="container">
        <div className="reviews__content">
          <div className="reviews__text">
            <div className="reviews__title">Отзывы</div>
            <div className="reviews__text-btns">
              <img src={WorkOptionsImg} alt="WorkOptions" />
              <img src={WorkOptionsImg2} alt="WorkOptions" />
            </div>
          </div>
          <div className="reviews__cards">
            <div className="reviews__card">
              <img src={QuotesImg} alt="Quotes" />
              <div className="reviews__desc">
                O Washington está sempre estudando e aprendendo, buscando
                aprimorar aquilo que faz. Esse é sua melhor qualidade. Está
                sempre em busca de seus objetivos, com foco e organização. Além
                disso, tecnicamente, no que se propõe a fazer, faz bem feito.
                Sempre!
              </div>
              <div className="reviews__account-name">Romário Lima</div>
              <div className="reviews__account-desc">Компьютерный инженер</div>
            </div>
            <div className="reviews__card">
              <img src={QuotesImg} alt="Quotes" />
              <div className="reviews__desc">
                O Washington está sempre estudando e aprendendo, buscando
                aprimorar aquilo que faz. Esse é sua melhor qualidade. Está
                sempre em busca de seus objetivos, com foco e organização. Além
                disso, tecnicamente, no que se propõe a fazer, faz bem feito.
                Sempre!
              </div>
              <div className="reviews__account-name">Romário Lima</div>
              <div className="reviews__account-desc">Компьютерный инженер</div>
            </div>
            <div className="reviews__card">
              <img src={QuotesImg} alt="Quotes" />
              <div className="reviews__desc">
                O Washington está sempre estudando e aprendendo, buscando
                aprimorar aquilo que faz. Esse é sua melhor qualidade. Está
                sempre em busca de seus objetivos, com foco e organização. Além
                disso, tecnicamente, no que se propõe a fazer, faz bem feito.
                Sempre!
              </div>
              <div className="reviews__account-name">Romário Lima</div>
              <div className="reviews__account-desc">Компьютерный инженер</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Reviews;
