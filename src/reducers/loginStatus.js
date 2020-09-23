import Types from '../types';

const loginStatus = (state = { loginStatus: 'pending' }, action) => {
  switch (action.type) {
    case Types.userInfoTypes.FETCH_USER_INFO_SUCCESS:
      return { ...state, ...action.payload };
    case Types.userInfoTypes.FETCH_USER_INFO_FAIL:
      return { ...state, ...action.payload };
    default:
      return state;
  }
};

export default loginStatus;
