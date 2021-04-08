import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { ApolloProvider } from '@apollo/client'
import dayjs from 'dayjs'
import 'dayjs/locale/ko'

import Home from '@components/Home'
import Notice from '@components/Notice'
import Cafeteria from '@components/Cafeteria'
import Schedule from '@components/Schedule'
import { client } from '@src/apollo'
import { GlobalStyle } from '@src/assets/style/globalStyle'
import Footer from '@components/shared/Footer'

dayjs.locale('ko')

ReactDOM.render(
  <ApolloProvider client={client}>
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/cafeteria" component={Cafeteria} />
        <Route path="/schedule" component={Schedule} />
        <Route path="/notice" component={Notice} />
      </Switch>
      <Footer />
    </Router>
    <GlobalStyle />
  </ApolloProvider>,
  document.getElementById('root'),
)
