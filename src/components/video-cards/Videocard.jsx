import "./videocard.css";

import VideoImg from "./../../img/image/video.png";

const VideoCard = () => {
  return (
    <section className="video">
      <div className="container">
        <div className="video__content">
          <div className="video_text">
            <div className="video__title">Проекты в видео</div>
            <div className="video__inner">
              Всегда полезно знать немного редактирования
            </div>
          </div>
          <div className="video__cards">
            <div className="video__card">
              <div className="video__card-img">
                <img src={VideoImg} alt="" />
              </div>
              <div className="video__card-content">
                <div className="video__card-title">Move.it</div>
                <div className="video__card-btns">
                  <a href="#!">React JS</a>
                  <a href="#!">React JS</a>
                </div>
              </div>
              <div className="video__card-dec-content">
                <div className="video__card-inner">Move.it</div>
                <div className="video__card-btn-watch">
                  <a href="#!">Смотреть</a>
                </div>
              </div>
            </div>
            <div className="video__card card2">
              <div className="video__card-img">
                <img src={VideoImg} alt="" />
              </div>
              <div className="video__card-content">
                <div className="video__card-title">Move.it</div>
                <div className="video__card-btns">
                  <a href="#!">React JS</a>
                  <a href="#!">React JS</a>
                </div>
              </div>
              <div className="video__card-dec-content">
                <div className="video__card-inner">Move.it</div>
                <div className="video__card-btn-watch">
                  <a href="#!">Смотреть</a>
                </div>
              </div>
            </div>
            <div className="video__card">
              <div className="video__card-img">
                <img src={VideoImg} alt="" />
              </div>
              <div className="video__card-content">
                <div className="video__card-title">Move.it</div>
                <div className="video__card-btns">
                  <a href="#!">React JS</a>
                  <a href="#!">React JS</a>
                </div>
              </div>
              <div className="video__card-dec-content">
                <div className="video__card-inner">Move.it</div>
                <div className="video__card-btn-watch">
                  <a href="#!">Смотреть</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoCard;
