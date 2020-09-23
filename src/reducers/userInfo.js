import Types from '../types';

const userInfo = (state = { logged: false }, action) => {
  switch (action.type) {
    case Types.userInfoTypes.SET_USER_INFO:
      return { ...state, ...action.payload };
    case Types.userInfoTypes.CLEAR_USER_INFO:
      return { logged: false };
    default:
      return state;
  }
};

export default userInfo;
