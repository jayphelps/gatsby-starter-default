import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout';

class SwaggerPage extends React.Component {
  swaggerRef = React.createRef();

  async componentDidMount() {
    // swagger-ui doesn't work in SSR. In fact if you even
    // import it server-side it throws errors.
    const [{ default: SwaggerUI }, _] = await Promise.all([
      import('swagger-ui'),
      import('swagger-ui/dist/swagger-ui.css')
    ]);

    SwaggerUI({
      domNode: this.swaggerRef.current,
      url: 'https://petstore.swagger.io/v2/swagger.json'
    })
  }

  render() {
    return (
      <Layout>
        <div ref={this.swaggerRef} />
      </Layout>
    )
  }
}

export default SwaggerPage;
