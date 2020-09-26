import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/Header'
import Users from './components/Users'
import NewUser from './components/NewUser'
import EditUser from './components/EditUser'

// Redux
import { Provider } from 'react-redux'
import store from './store'

function App() {
  return (
    <Router>
      <Provider store={store}>
        <Header />
        <div className="container">
          <Switch>
            <Route exact path="/" component={Users} />
            <Route exact path="/users/new" component={NewUser} />
            <Route exact path="/users/edit/:id" component={EditUser} />
          </Switch>
        </div>
      </Provider>
    </Router>
  );
}

export default App;
