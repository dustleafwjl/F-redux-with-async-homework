import Types from '../types';

export const setUserInfo = info => {
  // eslint-disable-line
  return {
    type: Types.userInfoTypes.SET_USER_INFO,
    payload: info
  };
};

export const clearUserInfo = () => {
  // eslint-disable-line
  return {
    type: Types.userInfoTypes.CLEAR_USER_INFO
  };
};

export const loginPending = () => {
  return {
    type: Types.loginTypes.LOGIN_PENDING
  };
};
export const loginSuccess = () => {
  return {
    type: Types.loginTypes.LOGIN_SUCCESS
  };
};

export const loginFail = () => {
  return {
    type: Types.loginTypes.LOGIN_FAIL
  };
};

export const loginRest = () => {
  return {
    type: Types.loginTypes.LOGIN_RESET
  };
};

export const fetchUserInfo = () => dispatch => {
  console.log(Types);
  dispatch(loginPending());
  fetch('https://my-json-server.typicode.com/kevindongzg/demo/login')
    .then(res => res.json())
    .then(data => {
      dispatch(setUserInfo({ logged: true, ...data }));
      dispatch(loginSuccess());
    })
    .catch(err => {
      console.log(err);
      dispatch(loginFail(err));
    });
};
