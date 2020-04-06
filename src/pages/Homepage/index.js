import React from 'react';
import Footer from "../../components/Footer";
import Header from "../../components/header";
import Welcome from "../../components/welcome";
import Main from "../../components/main";
import Article from "../../components/Article";

export default function Homepage() {
    return(
        <>
        <Header />
        <Main />
        <Welcome />
        <Article />
        <Footer />

        </>
    )
}