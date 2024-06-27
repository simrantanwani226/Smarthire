// src/App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import Login from './components/login';
import Register from './components/Register';
import Dashboard from './components/Dashboard'; // Import the Dashboard component
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  const [token, setToken] = useState(null);

  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/login">
            <Login setToken={setToken} />
          </Route>
          <Route path="/register" component={Register} />
          <Route path="/dashboard">
            {token ? <Dashboard token={token} /> : <Login setToken={setToken} />}
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default App;
