import React from "react";
import Footer from "./components/Footer";
import Header from "./components/header";
import Welcome from "./components/welcome";
import Main from "./components/main";
import * as ROUTES from '../src/constants/routes';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';


function App() {
  return (
      <Router>
        <Switch>
        <div className="App">
        <Header />
        <Main />
        <Welcome />
        <Footer />
        </div>
        </Switch>
      </Router>
  );
}

export default App;
