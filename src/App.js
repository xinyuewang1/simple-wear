import React from "react";

import Layout from "./components/Layout/Layout";
import LayerBuilder from "./containers/LayerBuilder/LayerBuilder";

function App() {
  return (
    <div>
      <Layout>
        <LayerBuilder />
      </Layout>
    </div>
  );
}

export default App;
