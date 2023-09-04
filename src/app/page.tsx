import styles from './page.module.css';
import { getUser } from './api/logto/user/get-user';
import Login from './login';
import type { InferGetServerSidePropsType, GetServerSideProps } from 'next';

// export const getServerSideProps: GetServerSideProps<{
//   data: any;
// }> = async () => {
//   const res = await fetch('http://localhost:3000/api/university/list');
//   console.log(res);
//   const data = await res.json();
//   return { props: { data } };
// };

async function getData() {
  const res = await fetch('http://localhost:3000/api/university/list');
  console.log(res);
  // const data = await res.json();
  return [];
}

const Home = async () => {
  const user = await getUser();
  const data = await getData();
  console.log(data);

  return (
    <main className={styles.main}>
      <div>{user.claims?.name ?? 'Not Login'}</div>
      <Login isAuth={user && user.isAuthenticated} />
    </main>
  );
};

export default Home;
