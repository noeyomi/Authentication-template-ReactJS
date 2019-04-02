import React from 'react';
import withStyles from '@material-ui/core/styles/withStyles';
import style from './style';
import cl from 'classnames';
import { Input, Button } from '@material-ui/core';
import api from '../../../../services/api';
import urls from '../../../../services/urls';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { mapStateToProps, mapDispatchToProps } from '../../../../services/redux/tools';

class Login extends React.Component {

  state = {
    mail: '',
    password: '',
  };

  onRegister = async e => {
    const { mail, password } = this.state;

    e.preventDefault();
    try {
      const user = await api.post('/login', {
        mail,
        password,
      });
      window.message('success', 'Successfully logged in');
      this.props.updateUser(user.data);
      this.props.history.push(urls.home);
    } catch (e) {
      window.message('error', 'Error while logging in');
      // TODO clarify about 409 and stuff
    }
  }

  update = e => this.setState({ [e.target.name]: e.target.value });

  render() {
    const { classes, className } = this.props;
    const { mail, password } = this.state;

    return (
      <form onSubmit={this.onRegister} className={cl(classes.root, className)}>
        <Input placeholder={'Mail'} value={mail} onChange={this.update} name={'mail'} />
        <Input placeholder={'Password'} value={password} onChange={this.update} name={'password'} type={'password'} />
        <Button type={'submit'}>Login</Button>
      </form>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(withStyles(style)(Login)));
