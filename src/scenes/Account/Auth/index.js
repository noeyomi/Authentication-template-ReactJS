import React from 'react';
import withStyles from '@material-ui/core/styles/withStyles';
import style from './style';
import { Input } from '@material-ui/core';
import urls from '../../../services/urls';
import Login from './Login';
import Register from './Register';
import { withRouter } from 'react-router-dom';
import Logout from './Logout';

const forms = {
  [urls.account.login]: Login,
  [urls.account.register]: Register,
  [urls.account.logout]: Logout,
};

class Auth extends React.Component {
  render() {
    const { classes } = this.props;

    const Comp = forms[this.props.location.pathname];

    if (!Comp) {
      throw new Error('Could not find component linked to this urls');
    }

    return (
      <div className={classes.root}>
        <Comp className={classes.container} />
      </div>
    );
  }
}

export default withRouter(withStyles(style)(Auth));
