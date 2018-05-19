import Link from 'next/link'

import './LayoutHeader.scss';

const Layout = ({ children }) => {
  return (
    <header className="layout-header">
      <nav>
        <ul>
          <li><Link href="/"><a>Main page</a></Link></li>
          <li><Link href="/page2"><a>Page 2</a></Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Layout;
