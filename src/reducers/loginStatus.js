import Types from '../types';

const loginStatus = (state = { loginStatus: 'fail' }, action) => {
  console.log('demodemodemo');
  switch (action.type) {
    case Types.loginTypes.LOGIN_SUCCESS:
      return { ...state, loginStatus: 'success' };
    case Types.loginTypes.LOGIN_PENDING:
      return { ...state, loginStatus: 'pending' };
    case Types.loginTypes.FLOGIN_FAIL:
      return { ...state, loginStatus: 'fail' };
    case Types.loginTypes.LOGIN_RESET:
      return { ...state, loginStatus: 'default' };
    default:
      return state;
  }
};

export default loginStatus;
