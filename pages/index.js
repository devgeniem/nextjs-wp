import React from 'react';
import Layout from '../components/Layout/Layout';


class Main extends React.PureComponent {

  createMarkup = (markup) => ({ __html: markup });

  render() {
    return (
      <Layout>
        <p>Page 1</p>
      </Layout>
    );
  }
}

export default Main;
