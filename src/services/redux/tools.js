const mapStateToProps = state => ({
  user: state.userReducer.user,
  ready: state.readyReducer.ready,
});

const mapDispatchToProps = dispatch => ({
  updateUser: user => {
    dispatch({ type: 'UPDATE_USER', user });
  },
  updateReady: ready => {
    dispatch({ type: 'UPDATE_READY', ready });
  },
});

export { mapDispatchToProps, mapStateToProps };