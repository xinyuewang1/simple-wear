import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Layout from "./hoc/Layout/Layout";
import LayerBuilder from "./containers/LayerBuilder/LayerBuilder";
import Story from "./components/Story/Story";

function App() {
  return (
    <BrowserRouter>
      <div>
        <Layout>
          <Switch>
            <Route path="/" exact component={LayerBuilder} />
            <Route path="/story" component={Story} />
            <Route render={() => <h1>404</h1>} />
          </Switch>
        </Layout>
      </div>
    </BrowserRouter>
  );
}

export default App;
