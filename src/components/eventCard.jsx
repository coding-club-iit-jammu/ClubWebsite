import React from "react";
import { useState } from "react";
import Modal from "./modal";

export default function eventCard({name,type,date,desc,poster_img,duration,color,secondCard,name2,type2,date2,desc2,poster_img2,duration2,color2}) {


  return (
    <div>
      <article className={`postcard dark ${color}`} style={{marginLeft:'20px',marginRight:'20px'}}>
        <a className="postcard__img_link" href="#">
          <img
            className="postcard__img"   
            src={poster_img}
            alt="Image Title"
          />
        </a>
        <div className="postcard__text">
          <h1 className="postcard__title red">
            <a href="#">{name}</a>
          </h1>
          <div className="postcard__subtitle small">
            <time dateTime="2020-05-25 12:00:00">
              <i className="fas fa-calendar-alt mr-2" />
              {date}
            </time>
          </div>
          <div className="postcard__bar" />
          <div className="postcard__preview-txt">
            {desc}
          </div>
          <ul className="postcard__tagbox">
            <li className="tag__item">
              <i className="fas fa-tag mr-2" />
              {type}
            </li>
            <li className="tag__item">
              <i className="fas fa-clock mr-2" />
              {duration}
            </li>
            <li className={`tag__item play ${color}`}>
              <button>
                Expand
              </button>
            </li>
          </ul>
        </div>
      </article>
      {secondCard && <article className={`postcard dark ${color2}`} style={{marginLeft:'20px',marginRight:'20px'}}>
        <a className="postcard__img_link" href="#">
          <img
            className="postcard__img"   
            src={poster_img2}
            alt="Image Title"
          />
        </a>
        <div className="postcard__text">
          <h1 className="postcard__title red">
            <a href="#">{name2}</a>
          </h1>
          <div className="postcard__subtitle small">
            <time dateTime="2020-05-25 12:00:00">
              <i className="fas fa-calendar-alt mr-2" />
              {date2}
            </time>
          </div>
          <div className="postcard__bar" />
          <div className="postcard__preview-txt">
            {desc2}
          </div>
          <ul className="postcard__tagbox">
            <li className="tag__item">
              <i className="fas fa-tag mr-2" />
              {type2}
            </li>
            <li className="tag__item">
              <i className="fas fa-clock mr-2" />
              {duration2}
            </li>
            <li className={`tag__item play ${color2}`}>
              <button>
                
                Expand
              </button>
            </li>
          </ul> 
        </div>
      </article>}
    </div>
  );
}
