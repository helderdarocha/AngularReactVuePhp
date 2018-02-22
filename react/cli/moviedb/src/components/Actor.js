import React, { Component } from 'react';

export const Actor = (props) => {
    return (
        <div>
          <li>{props.name} (IMDB: {props.imdb})</li>
        </div>
    )
}