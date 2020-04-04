import React from "react";
import ContactPage from "./pages/Contact";
import * as ROUTES from "../src/constants/routes";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <Router>
      <Switch>
        <div className="App">
          <ContactPage />
        </div>
      </Switch>
    </Router>
  );
}

export default App;
