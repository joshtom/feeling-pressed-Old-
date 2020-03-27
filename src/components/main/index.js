import React from 'react';
import './styles.scss';
import { Button } from 'react-bootstrap';
import Background from '../../assets/jack-sharp-OptEsFuZwoQ-unsplash.png';

const bgImage = {
  background: `url(${Background}) no-repeat`,
  backgroundSize: 'cover',
}
export default function Main() {
    return(
        <div className="main" style={bgImage}> 
            <div className="container">
                <div className="row">
                <div className="col-lg-5 col-md-6 col-sm-12">
                    <h1 className="display-4"> BE INSPIRED </h1>
                    <p> "And it came to pass, that, as the people pressed upon Him to hear the word of GOD, he stood by the lake of Gennesaret" </p>
                    <Button variant="warning" className="btn__signup"> Signup </Button>
                    <Button variant="outline-warning" className="btn__learn"> Learn More </Button>
                </div>
                </div>
            </div>
        </div>
    )
}