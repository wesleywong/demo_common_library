import React, { Component } from 'react';
import { Switch, Route, BrowserRouter as Router, Redirect } from 'react-router-dom';
import { Provider } from 'react-redux';
import Layout from './components/Layout';
import ManageNlb from './pages/Nlb/pages/Manage';
import { withNamespaces, withTranslation } from 'react-i18next';
import { withCookies, Cookies } from 'react-cookie';
//import logo from './logo.svg';
import './assets/index.scss';
import store from 'store';

class App extends Component {
  render() {
		const public_url = (process.env.PUBLIC_URL) ? process.env.PUBLIC_URL : '';
	  return (
			<Provider store={store}>
				<Router basename={process.env.NODE_ENV === 'production' ? 'cr-demo' : ''}>
		      <Switch>
		        <Layout>
							<Route path={`${public_url}/nlp-manage`} component={ManageNlb} />
							<Route exact path={`${public_url}/`} render={() => (<Redirect to={`${public_url}/nlp-manage`} />)} />
		        </Layout>
		      </Switch>
		    </Router>
			</Provider>
	  );
  }
}
export default withCookies(withTranslation()(App));
//export default withNamespaces('translations')(App);
