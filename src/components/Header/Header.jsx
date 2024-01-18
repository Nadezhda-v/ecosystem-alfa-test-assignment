import style from './Header.module.css';
import Layout from '../Layout';
import Auth from '../Header/Auth';

export const Header = () => (
  <header className={style.header}>
    <Layout>
      <div className={style.сontainer}>
        <Auth />
      </div>
    </Layout>
  </header>
);
