import * as React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/layout';
import Seo from '../components/seo';

const BlogPage = ({data}) => {
    return(
        <Layout pageTitle="My Blog Posts">
            <ul>
                {
                    data.allMdx.nodes.map((node) => (
                        <article key={node.id}>
                            <p>{node.frontmatter.slug}</p>
                            <h2>{node.frontmatter.title}</h2>
                            <p>Posted: {node.frontmatter.date}</p>
                            <p>{node.excerpt}</p>
                        </article>
                    ))  
                }
            </ul>
        </Layout>
    )
}
export const query = graphql`
    query {
        allMdx(sort: {frontmatter: {date: DESC}}){
            nodes {
                frontmatter{
                    slug
                    title
                    date(formatString: "D.MM.YYYY")
                    
                }
                id
                excerpt
            }
        }
    }
`

export const Head = () => <Seo title="My Blog Posts"></Seo>

export default BlogPage