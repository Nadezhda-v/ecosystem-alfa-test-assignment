import { useDispatch, useSelector } from 'react-redux';
import { authLogout } from '../store/auth/authAction';

const useAuth = () => {
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth.data);
  const loading = useSelector((state) => state.auth.loading);

  const clearAuth = () => {
    dispatch(authLogout());
  };

  return [loading, auth, clearAuth];
};

export default useAuth;
