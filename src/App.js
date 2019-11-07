import React from "react";
import { BrowserRouter } from "react-router-dom";

import Layout from "./hoc/Layout/Layout";
import LayerBuilder from "./containers/LayerBuilder/LayerBuilder";

function App() {
  return (
    <BrowserRouter>
      <div>
        <Layout>
          <LayerBuilder />
        </Layout>
      </div>
    </BrowserRouter>
  );
}

export default App;
