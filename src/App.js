import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ContactPage from "./pages/Contact";
import OurTeam from "./pages/Team";
import Header from "./components/header";
import Footer from "./components/Footer";
import AboutPage from "./pages/About";
import Homepage from "./pages/Homepage";

function App() {
  return (
    <Router>
      <Switch>
        <div className="App">
          <Header />
          <Route exact path="/" component={Homepage} />
          <Route exact path="/about" component={AboutPage} />
          <Route exact path="/contact" component={ContactPage} />
          <Route exact path="/team" component={OurTeam} />
          <Footer />
        </div>
      </Switch>
    </Router>
  );
}

export default App;
