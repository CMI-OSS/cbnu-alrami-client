import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { ApolloProvider } from '@apollo/client'

import Home from '@src/components/Home'
import Notice from '@src/components/Notice'
import Cafeteria from '@src/components/Cafeteria'
import { client } from '@src/apollo/client'
import '@src/assets/style/base.css'

ReactDOM.render(
  <ApolloProvider client={client}>
    <Router>
      <Route path="/" component={Home} exact />
      <Route path="/cafeteria" component={Cafeteria} />
      <Route exact path="/notice" component={Notice}></Route>
    </Router>
  </ApolloProvider>,
  document.getElementById('root'),
)
