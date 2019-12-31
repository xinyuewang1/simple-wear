import React, { useEffect } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { useDispatch } from "react-redux";

import Layout from "./hoc/Layout/Layout";
import LayerBuilder from "./containers/LayerBuilder/LayerBuilder";
import Story from "./components/Story/Story";
import Settings from "./components/Settings/Settings";
import Auth from "./containers/Auth/Auth";
import Logout from "./containers/Auth/Logout/Logout";
import * as actions from "./store/actions/index";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(actions.authCheckState());
  }, [dispatch]);

  return (
    <BrowserRouter>
      <div>
        <Layout>
          <Switch>
            <Route path="/" exact component={LayerBuilder} />
            <Route path="/story" component={Story} />
            <Route path="/settings" component={Settings} />
            <Route path="/auth" component={Auth} />
            <Route path="/logout" component={Logout} />
            <Route
              render={() => <h1>404 We don't have this page yet. :(</h1>}
            />
          </Switch>
        </Layout>
      </div>
    </BrowserRouter>
  );
}

export default App;
