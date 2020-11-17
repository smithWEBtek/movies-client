import React from 'react';
import './GenreCard.css';

const GenreCard = (props) => {
  return (
    <div className={"genre-card"} key={props.index}>
      <a href={props.url}>
        <h3 className={"genre-card__title"}>{props.genre.title}</h3>
      </a>
    </div >
  )
}

export default GenreCard;
