import React from "react";

import Layout from "./components/Layout/Layout";
import LayerBuilder from "./containers/LayerBuilder/LayerBuilder";

import garments from "./components/Clothes/Garment/Garment.module.css";

function App() {
  return (
    <div>
      <Layout>
        <LayerBuilder />
      </Layout>
      <div className={garments.walking_shorts}></div>
    </div>
  );
}

export default App;
