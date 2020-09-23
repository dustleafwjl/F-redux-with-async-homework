import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchSetUserInfo, clearUserInfo } from '../actions';
import './Header.scss';

class Header extends Component {
  switchLogin = () => {
    if (this.props.userInfo.logged) {
      this.props.handleSignOut();
    } else {
      this.props.handleSignIn();
    }
  };

  render() {
    return (
      <header className="header">
        <div className="header-wrapper">
          {this.props.userInfo.logged && (
            <>
              <img src="https://avatars2.githubusercontent.com/u/40817605" alt="头像" />
              <span className="username">Kevin</span>
            </>
          )}

          <a className="sign" onClick={this.switchLogin}>
            {this.props.userInfo.logged ? 'Sign out' : 'Sign in'}
          </a>
        </div>
      </header>
    );
  }
}

const mapStateToProps = ({ userInfo }) => ({
  userInfo
});

const mapDispatchToProps = {
  handleSignIn: info => fetchSetUserInfo(info),
  handleSignOut: () => clearUserInfo()
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
