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

export const fetchUserInfoPending = () => {
  return {
    type: Types.userInfoTypes.FETCH_USER_INFO_PENDING
  };
};
export const fetchUserInfoSuccess = () => {
  return {
    type: Types.userInfoTypes.FETCH_USER_INFO_SUCCESS
  };
};

export const fetchUserInfoFail = () => {
  return {
    type: Types.userInfoTypes.FETCH_USER_INFO_FAIL
  };
};
export const fetchUserInfo = () => dispatch => {
  dispatch(fetchUserInfoPending());
  fetch('https://my-json-server.typicode.com/kevindongzg/demo/login')
    .then(res => res.json())
    .then(data => {
      dispatch(setUserInfo({ logged: true, ...data }));
      dispatch(fetchUserInfoSuccess());
    })
    .catch(err => {
      console.log(err);
      dispatch(fetchUserInfoFail(err));
    });
};
