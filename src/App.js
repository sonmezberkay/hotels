import Layout from './layout/Layout';
import Home from './components/Home';
import SearchedHotels from './components/SearchedHotels';

import { Route, Switch } from "react-router-dom";

function App() {

  return (
    <Layout>
      <Switch>
        <Route path="/" exact={true}>
          <Home />
        </Route>
        <Route path="/home/:id">
          <SearchedHotels />
        </Route>
      </Switch>
    </Layout>
  );
}

export default App;
