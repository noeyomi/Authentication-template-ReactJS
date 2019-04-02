import React from 'react';
import withStyles from '@material-ui/core/styles/withStyles';
import style from './style';
import { connect } from 'react-redux';
import { mapStateToProps, mapDispatchToProps } from '../../../services/redux/tools';

class Me extends React.Component {
  render() {
    const { classes, user } = this.props;
    return (
      <div className={classes.root}>
        <span>You are logged in under {user.mail}</span>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(style)(Me));
