import React from "react";
import { Link } from 'react-router-dom';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import Card from '../../elements/Card'
import './style.scss';

export default function Article() {
    return(
        <div className="article">
            <div className="container">     
                <div className="row">
                    <div className="col-lg-12 col-md-12 col-sm-12 mt-4">
                        <h1 className="">
                            Articles
                        </h1>
                        <Link to="/articles"> view all <ArrowForwardIosIcon /></Link>
                    </div>
                </div>
                <div className="row bg-dark">
                    <div className="col-lg-3 col-md-6 col-sm-12">
                        <Card />
                    </div>
                </div>
            </div>
        </div>
    )
}