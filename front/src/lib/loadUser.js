import { tempSetUser } from '../redux/reducers/authReducer';
import { USER_LOADING_REQUEST } from '../redux/type';
import store from '../store/configureStore';

const loadUser = () => {
  try {
    const user = localStorage.getItem('user');
    if (!user) return;
    store.dispatch(tempSetUser(user));
    store.dispatch({
      type: USER_LOADING_REQUEST,
    });
  } catch (e) {
    console.log(e);
  }
};

export default loadUser;
