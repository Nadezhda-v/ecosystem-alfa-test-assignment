import style from './Main.module.css';
import Layout from '../Layout';
import List from './List';
import { Route, Routes } from 'react-router-dom';
import Modal from '../Modal';

export const Main = () => (
  <main className={style.main}>
    <Layout>
      <Routes>
        <Route path='/' element={<List />} />
        <Route path='/card/:id' element={<Modal />} />
      </Routes>
    </Layout>
  </main>
);
