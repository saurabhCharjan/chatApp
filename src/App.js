import Login from "./pages/login";
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Dashboard from "./pages/dashboard"
function App() {
  return (
    <BrowserRouter>
    <Switch>
        <Route exact path="/" component={Login} />
        <Route path="/login" component={Login} />
      </Switch>
      <Route path="/dashboard" component={Dashboard} />
    </BrowserRouter>
  );
}

export default App;
