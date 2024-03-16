import * as React from "react";
import { useStaticQuery, graphql} from "gatsby";
import Nav from "./nav";
import {
    container,
    heading,
    siteTitle
} from './style.module.css';


const Layout = ({pageTitle, children}) => {
    const data = useStaticQuery(graphql`
        query{
            site{
                siteMetadata{
                    title
                }
            }
        }
    `)
    return(
        <div className={container}>
            <header className={siteTitle}>{data.site.siteMetadata.title}</header>
            <Nav></Nav>
            <main>
                <h1 className={heading}>{pageTitle}</h1>
                {children}
            </main>
        </div>
    )
}

export default Layout;