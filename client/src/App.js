import React, { useState } from "react";
import { Route, Switch } from "react-router-dom";
import { routes } from "./routes";
import SearchBar from "./components/SearchBar/SearchBar";

const App = () => {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <div className="App">
      <SearchBar />
      <Switch>
        {routes.map(({ path, component, exact }, index) => (
          <Route key={index} path={path} component={component} exact={exact} />
        ))}
      </Switch>
    </div>
  );
};

export default App;
