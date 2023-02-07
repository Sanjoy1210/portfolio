import Layout from '@/layout/index';
import About from 'components/subpages/About';
import { NextPage } from 'next';

const AboutPage: NextPage = () => {
  return (
    <Layout>
      <About />
    </Layout>
  );
};

export default AboutPage;
