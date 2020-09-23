import React, { Component } from 'react';
import { fetchUserInfo, loginRest } from '../../actions';
import { connect } from 'react-redux';
import './index.scss';

class Profile extends Component {
  handleCancelClick = () => {
    this.props.handleCancel();
  };
  handleCRetryClick = () => {
    this.props.handleSignIn();
  };
  render() {
    return (
      <div className="main-view error">
        <div>
          <h1>登陆失败！</h1>
          <section>
            <button onClick={this.handleCancelClick}>取消</button>
            <button onClick={this.handleCRetryClick}>重试</button>
          </section>
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ userInfo }) => ({
  userInfo
});
const mapDispatchToProps = {
  handleSignIn: info => fetchUserInfo(info),
  handleCancel: () => loginRest()
};

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
