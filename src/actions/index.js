export const setUserInfo = info => {
  // eslint-disable-line
  return {
    type: 'SET_USER_INFO',
    payload: info
  };
};

export const clearUserInfo = () => {
  // eslint-disable-line
  return {
    type: 'CLEAR_USER_INFO'
  };
};

export const fetchSetUserInfo = () => dispatch => {
  fetch('https://my-json-server.typicode.com/kevindongzg/demo/login')
    .then(res => res.json())
    .then(data => {
      dispatch(setUserInfo({ logged: true, ...data }));
    })
    .catch(err => {
      console.log(err);
    });
};
