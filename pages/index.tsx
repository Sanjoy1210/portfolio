import Layout from '@/layout/index';
import Home from 'components/subpages/Home';
import { NextPage } from 'next';

const HomePage: NextPage = () => {
  return (
    <Layout>
      <Home />
    </Layout>
  );
};

export default HomePage;
