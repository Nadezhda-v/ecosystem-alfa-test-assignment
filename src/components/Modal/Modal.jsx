import style from './Modal.module.css';
import ReactDOM from 'react-dom';
import { useEffect } from 'react';
import { usePhoto } from '../../hooks/usePhoto';
import Photo from './Photo';
import Preloader from '../../UI/Preloader';
import { useNavigate, useParams } from 'react-router-dom';
import { ReactComponent as BackIcon } from './img/back.svg';

export const Modal = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [photoData, status] = usePhoto(id);

  const handleButtonBack = () => {
    navigate('/');
  };

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => document.body.style.overflow = 'unset';
  }, []);

  return ReactDOM.createPortal(
    <div className={style.overlay} >
      <div className={`${style.modal}`}>
        {status === 'loading' && (
          <Preloader color={'#5c5c5c'} size={40} />
        )}
        {status === 'error' && (
          <p className={style.text}>
            Возникла ошибка при загрузке фотографии
          </p>
        )}
        {status === 'loaded' && (
          <>
            <button className={style.back} onClick={handleButtonBack}>
              <BackIcon className={style.svg} />
            </button>
            <Photo data={photoData} />
          </>
        )}
      </div>
    </div>,
    document.getElementById('modal-root')
  );
};
