import React from 'react';
import './styles.scss';
import  Button  from '@material-ui/core/Button';
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
                <div className="col-lg-6 col-md-6 col-sm-12">
                    <h1 className="display-4"> BE INSPIRED </h1>
                    <p className="col-lg-8 col-md-6 col-sm-12 p-0"> "And it came to pass, that, as the people pressed upon Him to hear the word of GOD, he stood by the lake of Gennesaret" </p>
                    <Button variant="contained" color="default" className="mr-4 btn btn-warning"> Signup </Button>
                    <Button variant="outlined" color="default" className="btn-2"> Learn More </Button>
                </div>
                </div>
            </div>
        </div>
    )
}