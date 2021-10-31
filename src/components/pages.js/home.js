import React from "react";
import AliceCarousel from 'react-alice-carousel';
import "react-alice-carousel/lib/alice-carousel.css";

import blackSwan from "../../../static/assets/images/blackswan.jpg";
import conceptTwo from "../../../static/assets/images/concept2.jpg";
import groupPhoto from "../../../static/assets/images/groupphoto.jpg";
import Jimin from "../../../static/assets/images/jimin.jpg";
import Jin from "../../../static/assets/images/jin.jpg";
import Jungkook from "../../../static/assets/images/jungkook.jpg";
import Rm from "../../../static/assets/images/rm.jpg";
import Suga from "../../../static/assets/images/suga.jpg";
import Taehyung from "../../../static/assets/images/v.jpg";
import Jhope from "../../../static/assets/images/jhope.jpg";
import Bts from "../../../static/assets/images/mapofthesoul7.jpg";


export default function() {
  return (
    <div className="carousel">

      <AliceCarousel autoPlay autoPlayInterval="3000">
        <img src={blackSwan} className="sliderimg"/>
        <img src={conceptTwo} className="sliderimg"/>
        <img src={groupPhoto} className="sliderimg"/>
        <img src={Jimin} className="sliderimg"/>
        <img src={Jin} className="sliderimg"/>
        <img src={Jungkook} className="sliderimg"/>
        <img src={Rm} className="sliderimg"/>
        <img src={Suga} className="sliderimg"/>
        <img src={Taehyung} className="sliderimg"/>
        <img src={Jhope} className="sliderimg"/>
        <img src={Bts} className="sliderimg"/>

      </AliceCarousel>

    </div>
  );
}
