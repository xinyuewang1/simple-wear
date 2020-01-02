import React, { useEffect } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import Layout from "./hoc/Layout/Layout";
import LayerBuilder from "./containers/LayerBuilder/LayerBuilder";
import Settings from "./components/Settings/Settings";
import Auth from "./containers/Auth/Auth";
import Logout from "./containers/Auth/Logout/Logout";
import * as actions from "./store/actions/index";
import asyncComponent from "./hoc/asyncComponent/asyncComponent";

const asyncStory = asyncComponent(() => {
  return import("./components/Story/Story");
});

function App() {
  const dispatch = useDispatch();
  const authed = useSelector(state => state.auth.authed);

  useEffect(() => {
    dispatch(actions.authCheckState());
  }, [dispatch]);

  let routes = (
    <Switch>
      <Route path="/" exact component={LayerBuilder} />
      <Route path="/story" component={asyncStory} />
      <Route path="/auth" component={Auth} />
      <Route
        render={() => (
          <h1>
            404
            <br /> We don't have this page yet or you're not authorised to visit
            it. :(
          </h1>
        )}
      />
    </Switch>
  );

  if (authed) {
    routes = (
      <Switch>
        <Route path="/" exact component={LayerBuilder} />
        <Route path="/story" component={asyncStory} />
        <Route path="/settings" component={Settings} />
        <Route path="/auth" component={Auth} />
        <Route path="/logout" component={Logout} />
        <Route
          render={() => (
            <h1>
              404
              <br /> We don't have this page yet. :(
            </h1>
          )}
        />
      </Switch>
    );
  }
  return (
    <BrowserRouter>
      <div>
        <Layout>{routes}</Layout>
      </div>
    </BrowserRouter>
  );
}

export default App;
