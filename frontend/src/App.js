import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import * as Pages from "./pages";
import * as Templates from "./templates";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route
          exact
          path="/"
          element={
            <Templates.BaseTemplate width="xl">
              <Pages.Dashboard />
            </Templates.BaseTemplate>
          }
        />
        <Route
          exact
          path="/about"
          element={
            <Templates.BaseTemplate width="xl">
              <Pages.About />
            </Templates.BaseTemplate>
          }
        />
      </Routes>
    </Router>
  );
};

export default App;
