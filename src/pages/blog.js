import React from 'react';
import Layout from '../components/layout';
import {graphql, useStaticQuery, Link} from 'gatsby';
import SEO from '../components/seo';

const BlogPage = () => {

    const data = useStaticQuery(graphql`
      query{
        allContentfulBlogPost(
            sort:{
              fields: publishedDate
              order: DESC
            }
        ){
          edges{
            node{
              title
              slug
              publishedDate(formatString: "MMMM Do, YYYY")
            }
          }
        }
      }
    `)

    return (
        <Layout>
          <SEO title='Blog' />
            <div className='blog-page'>
                <h1>Blog Page</h1>
                <div className='blog-main-div'>
                    {data.allContentfulBlogPost.edges.map(blog => 
                        <div className='blog-container'>
                            <h2>{blog.node.title}</h2>
                            <p>{blog.node.publishedDate}</p>
                            <Link to={`blog/${blog.node.slug}`}>Read More</Link>
                        </div>
                    )}
                </div>
            </div>
        </Layout>
    )
}

export default BlogPage;
