import Types from '../types';

const userInfo = (state = { logged: false, fetchStatus: 'default' }, action) => {
  switch (action.type) {
    case Types.userInfoTypes.FETCH_USER_INFO_SUCCESS:
      return { ...state, fetchStatus: 'success' };
    case Types.userInfoTypes.FETCH_USER_INFO_PENDING:
      return { ...state, fetchStatus: 'pending' };
    case Types.userInfoTypes.FETCH_USER_INFO_FAIL:
      return { ...state, fetchStatus: 'fail' };
    case Types.userInfoTypes.SET_USER_INFO:
      return { ...state, ...action.payload };
    case Types.userInfoTypes.CLEAR_USER_INFO:
      return { logged: false, fetchStatus: 'default' };
    default:
      return state;
  }
};

export default userInfo;
