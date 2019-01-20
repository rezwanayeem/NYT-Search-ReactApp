import React from "react";
import Books from "./pages/Books";
import SavedBooks from "./pages/SavedBooks";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/" component={Books} />
          <Route exact path="/savedbooks" component={SavedBooks} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
