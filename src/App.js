import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import Header from './layout/Header';
import Menu from './layout/Menu';
import Home from './views/Home';
import Error from './views/Error';
import { modules } from './utils';

import './App.scss';

class App extends Component {
  render() {
    console.log(this.props.login);
    return (
      <div className="app">
        <Router>
          <Header />
          <Menu />
          <main className="main">
            <Switch>
              <Route exact path="/">
                {this.props.login.loginStatus === 'fail' ? <Error /> : <Home />}
              </Route>
              {this.props.userInfo.logged &&
                modules.map(
                  ({ path, component, permissionCode }) =>
                    this.props.userInfo.permissions.includes(permissionCode) && (
                      <Route key={path} path={path}>
                        {component}
                      </Route>
                    )
                )}
              <Route path="*">
                <Home />
              </Route>
            </Switch>
          </main>
        </Router>
        {this.props.login.loginStatus === 'pending' ? <LoadingMask /> : null}
      </div>
    );
  }
}

const LoadingMask = () => {
  const loadingMaskStyle = {
    backgroundColor: 'rgba(0,0,0,0.3)',
    position: 'absolute',
    width: '100%',
    height: '100%',
    fontSize: '36px',
    color: '#fff',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  };
  return <div style={loadingMaskStyle}>loading...</div>;
};

const mapStateToProps = ({ userInfo, login }) => ({
  userInfo,
  login
});

export default connect(mapStateToProps)(App);
