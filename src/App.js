import React from "react";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ContactPage from "./pages/Contact";
import AboutPage from "./pages/About";
import Homepage from "./pages/Homepage"

function App() {
  return (
    <Router>
      <Switch>
        <div className="App">
       <Route exact path="/" component={Homepage} />
        <Route exact path="/about" component={AboutPage} />
        <Route exact path="/contact" component={ContactPage} />
        </div>
      </Switch>
    </Router>
  );
}

export default App;
