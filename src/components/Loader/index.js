import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withNamespaces } from 'react-i18next';

class Loader extends Component {
	static propTypes = {
		t: PropTypes.any,
	};

	constructor(props) {
		super(props);
		this.state = {
		};
	}

	render() {
		return (
			<div className="sgLoader">
				<div className="loader-backdrop white">
					<div className="roundSpin blue"></div>
				</div>
			</div>
		);
	}
}

export default withNamespaces('translations')(Loader);
