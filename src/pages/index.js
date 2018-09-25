import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'

const IndexPage = () => (
  <Layout>
    <h1>Home page using Gatsby</h1>
    <Link to="/swagger/">View Swagger Docs</Link>
  </Layout>
)

export default IndexPage
