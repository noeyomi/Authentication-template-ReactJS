import React, { Component } from 'react';
import './App.css';
import { MuiThemeProvider } from '@material-ui/core';
import theme from './theme/theme';
import Layout from './components/Layout';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import urls from './services/urls';
import PrivateRoute from './components/PrivateRoute';
import Notification from './components/Notification';
import { connect } from 'react-redux';
import { mapStateToProps, mapDispatchToProps } from './services/redux/tools';
import api from './services/api';
import Popup from './components/Popup';
import Account from './scenes/Account/Auth/';
import Me from './scenes/Account/Me';


class App extends Component {
  async componentDidMount() {
    try {
      const user = await api.get('/me');
      this.props.updateUser(user.data);
    } catch (e) {
      // Nothing happens, user just not logged
    }
    this.props.updateReady(true);
  }

  render() {
    return (
      <MuiThemeProvider theme={theme}>
        <Router>
          <div className="App">
            <Notification />
            <Layout>
              <Popup />
              <Switch>
                <PrivateRoute exact path={urls.home} component={Me} />
                <Route exact path={urls.account.login} component={Account} />
                <Route exact path={urls.account.register} component={Account} />
                <PrivateRoute exact path={'*'} />
              </Switch>
            </Layout>
          </div>
        </Router>
      </MuiThemeProvider>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
