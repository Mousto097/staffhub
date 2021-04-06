import { Switch, Route } from "react-router";
import { BrowserRouter as Router } from "react-router-dom";
import ScreenUrls from "./utils/screenUtils";
import { Landing, Login } from "./pages";
import AppRouter from "./AppRouter";
import './App.scss';

function App() {

  const AppLayout = () => (
    <div id="app" className="app-layout">
      <Switch>
        <Route path={ScreenUrls.APP_ROUTER} component={AppRouter} />
        <Route path={ScreenUrls.LOGIN} component={Login} />
        <Route path={ScreenUrls.LANDING} component={Landing} />
      </Switch>
    </div>
  );
  return (
    <div>
      <Router>
        <AppLayout />
      </Router>
    </div>
  );
}

export default App;
