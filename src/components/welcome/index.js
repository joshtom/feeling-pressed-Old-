import React from 'react';
import welcomeImage from '../../assets/hiclipart.com.png'
import './styles.scss'

export default function Welcome() {
    return(
    <>
    <div className="welcome">
        <div className="container">
            <div className="row"> 
                <div className="col-lg-12">
                    <h3 className="text-center mt-5"> Welcome to Feeling Pressed </h3>
                    <p className="text-center col-lg-6 m-auto">We are a platform focused towards changing Hearts unto genuine repentance, Building earth to God's Divine pattern, And claiming back the lost Heritage.</p>
                    <img src={welcomeImage} alt=""/>
                </div>
            </div>
        </div>
    </div>
    </>
    )
}