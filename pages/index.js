import React from 'react';
import Layout from '../components/Layout/Layout';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';

class Main extends React.PureComponent {

  createMarkup = (markup) => ({ __html: markup });

  render() {
    return (
      <Layout>
        {this.props.data.posts && this.props.data.posts.edges.map(edge => {
          const post = edge.node;
          return (
            <div key={post.title}>
              <h1>{post.title}</h1>
              <p dangerouslySetInnerHTML={this.createMarkup(post.content)} />
            </div>
          );
        })}
      </Layout>
    );
  }
}

export default graphql(gql`
  query MainQuery {
    posts {
      edges {
        node {
          id
          content
          title
        }
      }
    }
  }
`)(Main);
