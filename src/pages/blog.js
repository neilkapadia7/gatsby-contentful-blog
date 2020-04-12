import React from 'react';
import Layout from '../components/layout';
import {graphql, useStaticQuery, Link} from 'gatsby';

const BlogPage = () => {

    const data = useStaticQuery(graphql`
        query{
            allMarkdownRemark{
              edges{
                node{
                  frontmatter{
                    title
                    date
                  }
                  html
                  excerpt
                  fields {
                    slug
                  }
                }
              }
            }
        }
    `)

    return (
        <Layout>
            <div className='blog-page'>
                <h1>Blog Page</h1>
                <div className='blog-main-div'>
                    {data.allMarkdownRemark.edges.map(blog => 
                        <div className='blog-container'>
                            <h2>{blog.node.frontmatter.title}</h2>
                            <p>{blog.node.frontmatter.date}</p>
                            <Link to={`blog/${blog.node.fields.slug}`}>Read More</Link>
                        </div>
                    )}
                </div>
            </div>
        </Layout>
    )
}

export default BlogPage;
