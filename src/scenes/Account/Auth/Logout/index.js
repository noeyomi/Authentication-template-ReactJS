import React from 'react';
import { withRouter } from 'react-router-dom';
import api from '../../../../services/api';
import urls from '../../../../services/urls';

class Logout extends React.Component {
  async componentDidMount() {
    try {
      await api.post('/api/logout');
    } catch (e) {
      // Do nothing
    }
    this.props.history.push(urls.account.login);
  }

  render() {
    return null;
  }
}

export default withRouter(Logout);
