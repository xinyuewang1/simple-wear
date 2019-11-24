import React from "react";
import { BrowserRouter } from "react-router-dom";
import { Route, Switch, Redirect } from "react-router-dom";

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
            <Redirect from="/advSetting" to="/" />
            <Route path="/story" component={Story} />
          </Switch>
        </Layout>
      </div>
    </BrowserRouter>
  );
}

export default App;
