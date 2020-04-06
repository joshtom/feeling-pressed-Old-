import React from 'react';
import './style.scss';

export default function Card() {
    return(
        <div className="article-card mb-5">
            <img src="https://images.unsplash.com/photo-1474367658825-e5858839e99d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=60" alt="article-image" />
            <p className="card-title">How to conquer Corona Virus</p>
            <p className="card-subtitle"> Here is a quick way to resolve corona virus... </p>
            <p className="card-date">Posted April 2020</p>
            <p className="author-name">Tope Irefin</p>
        </div>
    )
} 