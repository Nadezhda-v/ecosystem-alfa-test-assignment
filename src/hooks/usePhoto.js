import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { photoRequestAsync } from '../store/photo/photoAction';

export const usePhoto = (id) => {
  const dispatch = useDispatch();
  const photoData = useSelector((state) => state.photo.photo);
  const status = useSelector((state) => state.photo.status);
  const token = useSelector((state) => state.token.token);

  useEffect(() => {
    dispatch(photoRequestAsync(id));
  }, [token]);

  return [photoData, status];
};
