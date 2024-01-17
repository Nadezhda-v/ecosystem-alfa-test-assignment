import style from './Auth.module.css';
import urlAuth from '../../../api/auth';
import useAuth from '../../../hooks/useAuth';
import { deleteToken } from '../../../store/token/tokenAction';
import { useDispatch, useSelector } from 'react-redux';
import Preloader from '../../../UI/Preloader';
import { useNavigate } from 'react-router-dom';
import { ReactComponent as LoginIcon } from './img/login.svg';
import { useEffect, useState } from 'react';
import { getCode } from '../../../api/token';
import { tokenRequestAsync } from '../../../store/token/tokenAction';
import { authRequestAsync } from '../../../store/auth/authAction';
import { cardsRequestAsync } from '../../../store/cards/cardsAction';

export const Auth = () => {
  const dispatch = useDispatch();
  const [loading, auth, clearAuth] = useAuth();
  const navigate = useNavigate();
  const [isLogoutVisible, setLogoutVisible] = useState(false);
  const token = useSelector(state => state.token.token);
  const code = getCode();

  const handleLogout = () => {
    setLogoutVisible(false);
    dispatch(deleteToken());
    clearAuth();
    navigate('/');
  };

  useEffect(() => {
    if (code) {
      dispatch(tokenRequestAsync());
    }

    if (token) {
      dispatch(authRequestAsync());
      dispatch(cardsRequestAsync());
      setLogoutVisible(true);
      navigate('/cards');
    }
  }, [code, token]);

  return (
    <div className={style.container}>
      {loading ? (
        <Preloader color={'#4a4d7a'} size={20} />
      ) : auth.name ? (
        <div className={style.user}>
          <span className={style.text}>{auth.name}</span>
          <img
            className={style.img}
            src={auth.image}
            alt='Аватар'
          />
        </div>
      ) : <></>}

      {isLogoutVisible ? (
        <button
          className={style.logout}
          onClick={handleLogout}
        >
          {'Выйти'}
        </button>
      ) : (
        <a className={style.authLink} href={urlAuth} >
          <LoginIcon className={style.svg} />
        </a>
      )}
    </div>
  );
};
