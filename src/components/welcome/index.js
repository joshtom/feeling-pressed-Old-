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
                    <p className="text-center col-lg-6 m-auto">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Debitis tenetur quas iure doloremque? Qui illum deserunt, nostrum, doloremque quaerat obcaecati unde ut nihil itaque commodi blanditiis non minima neque harum.</p>
                    <img src={welcomeImage} alt=""/>
                </div>
            </div>
        </div>
    </div>
    </>
    )
}