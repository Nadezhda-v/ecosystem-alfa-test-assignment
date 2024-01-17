import Header from './components/Header';
import Main from './components/Main';
import { updateToken } from './store/token/tokenAction';
import { getToken } from './api/token';
import { useDispatch } from 'react-redux';
import { Route, Routes } from 'react-router-dom';

export const App = () => {
  const dispatch = useDispatch();
  dispatch(updateToken(getToken()));

  return (
    <Routes>
      <Route path='*' element={
        <>
          <Header />
          <Main />
        </>
      } />
    </Routes>
  );
};
