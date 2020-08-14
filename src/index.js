import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Locale } from 'cplus_common_library';
import { unregister } from './serviceWorker';
import { I18nextProvider } from 'react-i18next';
import i18n from './i18n';
import { CookiesProvider } from 'react-cookie';

//ReactDOM.render(<App />, document.getElementById('root'));
console.log('@render');
console.log(i18n.language);
ReactDOM.render(
	<CookiesProvider>
		<I18nextProvider i18n={i18n}>
			<Locale>
			<App />
			</Locale>
		</I18nextProvider>
	</CookiesProvider>,
  document.getElementById('root')
);
unregister();
