import React from "react";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Footer from "./components/Footer";
import Header from "./components/header";
import Welcome from "./components/welcome";
import Main from "./components/main";
import ContactPage from "./pages/Contact";
import AboutPage from "./pages/About";

function App() {
  return (
    <Router>
      <Switch>
        <div className="App">
        <Header />
        <Main />
        <Welcome />
        <Footer />
        <Route path="/about" component={AboutPage} />
        <Route path="/contact" component={ContactPage} />
        </div>
      </Switch>
    </Router>
  );
}

export default App;
