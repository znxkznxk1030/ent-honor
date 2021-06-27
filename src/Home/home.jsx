import React from "react";
import "./style-home.scss";

import { actorBgImgList } from "../mock-data/actors";

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      actorBgImgList,
    };
  }

  render() {
    return (
      <div className="home-background">
        {/* <div className="title--header">
          <p>대탈출 팬 사이트</p>
        </div> */}

        <div className="context star-wars">
          <div className="crawl">
            <h2> 대 탈 출 4 </h2>
            <hr></hr>
            <p> 7 / 11 첫 방 송 </p>
            <hr></hr>
            <div className="text--inline">
              <p className="text--position">감독</p>
              <p className="text--name">정종연</p>
            </div>
            <br></br>
            <hr></hr>
            <div className="text--inline">
              <p className="text--position">미술</p>
              <p className="text--name">장연옥</p>
            </div>
            <br></br>
            <hr></hr>
            <div className="text--inline">
              <p className="text--position">출연</p>
              <p className="text--name">강호동</p>
            </div>
            <div className="text--inline">
              <p className="text--name">김종민</p>
            </div>
            <div className="text--inline">
              <p className="text--name">김동현</p>
            </div>
            <div className="text--inline">
              <p className="text--name">신동</p>
            </div>
            <div className="text--inline">
              <p className="text--name">유병재</p>
            </div>
            <div className="text--inline">
              <p className="text--name">피오</p>
            </div>
            <br></br>
            <hr></hr>
          </div>
          {this.state.actorBgImgList.map((actor, index) => (
            <img
              src={actor.src}
              key={index}
              alt="404"
              className={"actor-img-" + index}
            ></img>
          ))}
        </div>
        <div className="video-wrapper">
          <iframe
            className="video--iframe"
            src="https://www.youtube.com/embed/IZfBeMuPSBg"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    );
  }
}

export default Home;
