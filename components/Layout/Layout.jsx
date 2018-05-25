import LayoutHeader from './Header/LayoutHeader';

const Layout = ({ children }) => {
  return (
    <div className="wrapper">
      <LayoutHeader />
      <div>{children}</div>
    </div>
  );
};

export default Layout;
