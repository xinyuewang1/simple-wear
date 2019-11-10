import React from "react";
import { BrowserRouter } from "react-router-dom";
import { Route } from "react-router-dom";

import Layout from "./hoc/Layout/Layout";
import LayerBuilder from "./containers/LayerBuilder/LayerBuilder";
import Story from "./components/Story/Story";

function App() {
  return (
    <BrowserRouter>
      <div>
        <Layout>
          <Route path="/" exact component={LayerBuilder} />
          <Route path="/story" component={Story} />
          {/* <LayerBuilder /> */}
        </Layout>
      </div>
    </BrowserRouter>
  );
}

export default App;
