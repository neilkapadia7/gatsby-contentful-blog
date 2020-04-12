import React from 'react';
import Layout from '../components/layout';
import { graphql, Link } from 'gatsby';
import {documentToReactComponents} from '@contentful/rich-text-react-renderer';


// export const query = graphql`
//     query($slug :String!) {
//         markdownRemark(fields: { slug: { eq: $slug} }) {
//             frontmatter {
//                 title
//                 date
//             }
//             html
//         }
//     }
// `

export const query = graphql`
    query($slug: String) {
        contentfulBlogPost(slug: {eq: $slug}) {
            title
            publishedDate(formatString: "MMMM Do, YYYY")
            body{
                json
            }
        }
    }
`



const Blog = (props) => {
    return(
        <Layout>
            <h1>{props.data.contentfulBlogPost.title}</h1>
            <p>{props.data.contentfulBlogPost.publishedDate}</p>
            {documentToReactComponents(props.data.contentfulBlogPost.body.json)}
            <Link to='/blog'>Back</Link>
        </Layout>
    )
}

export default Blog;