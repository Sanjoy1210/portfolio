import { ReactNode } from 'react';
import Header from './Header';

interface ILayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: ILayoutProps) => {
  return (
    <main className="bg-light-bg min-h-screen dark:bg-dark-bg bg-no-repeat bg-center bg-cover bg-fixed md:pb-16 w-full">
      <Header />
      {children}
      {/* <Footer /> */}
    </main>
  );
};

export default Layout;
