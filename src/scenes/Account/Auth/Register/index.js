import React from 'react';
import withStyles from '@material-ui/core/styles/withStyles';
import style from './style';
import cl from 'classnames';
import { Input, Button } from '@material-ui/core';
import api from '../../../../services/api';
import urls from '../../../../services/urls';
import { withRouter } from 'react-router-dom';

class Register extends React.Component {

  state = {
    mail: '',
    password: '',
  };

  onRegister = async e => {
    const { mail, password } = this.state;

    e.preventDefault();
    try {
      await api.post('/register', {
        mail,
        password,
      });
      window.message('success', 'Successfully registered');
      this.props.history.push(urls.account.login);
    } catch (e) {
      window.message('error', 'Error while registering');
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
        <Button type={'submit'}>Register</Button>
      </form>
    );
  }
}

export default withRouter(withStyles(style)(Register));
