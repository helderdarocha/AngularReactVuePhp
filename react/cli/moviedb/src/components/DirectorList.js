import React, { Component } from 'react';
import { Director } from './Director';

export const DirectorList = (props) => {
    return (
        <div>
            <h2>Directors</h2>
            <ul>
            {props.data.map(item => <Director key={item.name} {...item} />)}
            </ul>
        </div>
    )
}