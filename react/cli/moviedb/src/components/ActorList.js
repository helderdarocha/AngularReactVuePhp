import React, { Component } from 'react';
import { Actor } from './Actor'

export const ActorList = (props) => {
    return (
        <div>
            <h2>Actors</h2>
            <ul>
            {props.data.map(item => <Actor key={item.imdb} {...item} />)}
            </ul>
        </div>
    )
}