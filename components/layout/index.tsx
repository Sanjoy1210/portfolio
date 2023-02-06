import { ReactNode } from 'react';
import Header from './Header';

interface ILayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: ILayoutProps) => {
  return (
    <main className="flex min-h-screen flex-col bg-light-bg dark:bg-dark-bg">
      <Header />
      {children}
      {/* <Footer /> */}
    </main>
  );
};

export default Layout;
