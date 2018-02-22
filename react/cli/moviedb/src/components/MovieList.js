import React, { Component } from 'react';
import { Movie } from './Movie';

export const MovieList = (props) => {
    return (
        <div>
            <h2>Movies</h2>
            <div>
            {props.data.map(item => <Movie key={item.imdb} {...item} />)}
            </div>
        </div>
    )
}