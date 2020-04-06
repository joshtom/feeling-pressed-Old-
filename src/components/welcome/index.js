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
                    <h1 className="text-center mt-5"> Welcome to Feeling Pressed </h1>
                    <p className="text-center"> What is prayer? </p>
                    <img src={welcomeImage} alt=""/>
                </div>
            </div>
        </div>
    </div>
    </>
    )
}