import React from 'react';
import withStyles from '@material-ui/core/styles/withStyles';
import style from './style';
import { Link } from 'react-router-dom';
import { List, ListItem, Paper, Input } from '@material-ui/core';
import { connect } from 'react-redux';
import { mapStateToProps, mapDispatchToProps } from '../../../../services/redux/tools';
import urls from '../../../../services/urls';
import SearchBar from './components/SearchBar';

const LogState = {
  WHATEVER: 0,
  NEEDLOG: 1,
  NEEDNOTLOG: 2,
};

const modules = [
  { name: 'Login', link: urls.account.login, log: LogState.NEEDNOTLOG },
  { name: 'Register', link: urls.account.register, log: LogState.NEEDNOTLOG },
  { name: 'Logout', link: urls.account.logout, log: LogState.NEEDLOG },
  { name: 'Me', link: urls.home, log: LogState.NEEDLOG },
];

class Sider extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <Paper square className={classes.root}>
        <SearchBar className={classes.search} />
        <List>
          {
            modules.map((e, k) => {
              const logged = this.props.user ? LogState.NEEDLOG : LogState.NEEDNOTLOG;

              if (
                e.log === LogState.WHATEVER ||
                e.log === logged
              )
                return (
                  <Link key={k} to={e.link} className={classes.link}>
                    <ListItem className={classes.container}>
                      {e.name}
                    </ListItem>
                  </Link>
                );
              return null;
            })
          }
        </List>
      </Paper>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(style)(Sider));
