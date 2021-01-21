import { React } from 'react';
import { BrowserRouter as Router,Switch,Route } from "react-router-dom";
import './App.css';
import Login from "./Login";
import About from "./About";
import Billing from "./Billing";
import CreateAccount from "./CreateAccount";



function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path='/createAccount'><CreateAccount /></Route>
          <Route path='/Login'><Login /></Route>
          <Route path='/About'><About /></Route>
          <Route path='/Orders'><h1>Orders</h1></Route>
          <Route path='/Billing'>
          <h1>Welcome to New Billing System</h1>
            <Billing /><Billing /></Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
