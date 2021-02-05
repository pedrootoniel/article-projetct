import React, { Fragment } from 'react'
import { ApolloProvider } from '@apollo/client';
import client from './Hooks/AuthProvider'

import Routes from './routes'
import Global from './global'

const App = () => (
  <ApolloProvider client={client}>
    <Fragment>
      <Global />
      <Routes />
    </Fragment>
  </ApolloProvider>
);


export default App;
