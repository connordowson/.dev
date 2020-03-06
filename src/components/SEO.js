// import React from "react"
// import { Helmet } from "react-helmet"
// import PropTypes from "prop-types"
// import { StaticQuery, graphql} from "gatsby"

// const SEO = ({title, description, siteURL}) => (
//   <StaticQuery query={query} render={({
//     site: {
//       siteMetadata:{
//         title,
//         description,
//         siteURL
//       }
//     }
//   }) => {
//     const seo = {
//       title: title || "Connor Dowson | Portfolio",
//       description: description || "Description",
//       siteURL: siteURL || "connordowson.dev"
//     }

//     return (
//       <>
//       <Helmet title={seo.title}>
//       <meta name="description" content={seo.description} />

//       </Helmet>
//       </>
//     )

//   }}/>
// )

// export default SEO

// SEO.propTypes = {
//   title: PropTypes.string,
//   description: PropTypes.string,
//   siteURL: PropTypes.string
// }
// SEO.defaultProps = {
//   title: null,
//   description: null,
//   siteURL: null,
// }

// const query = graphql`
//   query SEO {
//     site{
//       siteMetadata {
//         title
//         description
//         siteURL
//       }
//     }
//   }
// `
