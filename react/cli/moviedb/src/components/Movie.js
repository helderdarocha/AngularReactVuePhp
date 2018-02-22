import React, { Component } from 'react';
import { Actor } from './Actor';

export const Movie = (props) => {
    return (
        <div>
          <img src={props.poster} width="75" />
          <div>{props.title} ({props.year}) {props.duration} min. by {props.director.name}<br/>
          Cast:<ul> {props.actors.map(item => <Actor key={item.imdb} {...item} />)}</ul></div>
        </div>
    )
}