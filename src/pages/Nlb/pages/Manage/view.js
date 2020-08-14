import React, { Component } from 'react';
import { withNamespaces, withTranslation } from 'react-i18next';
import { withRouter } from 'react-router-dom';
import { EmailInput, TextField, Locale } from 'cplus_common_library';
import PropTypes from 'prop-types';
import {
	ButtonGroup, UncontrolledButtonDropdown, DropdownMenu, DropdownItem, DropdownToggle,
	Container, Row, Col, Badge, UncontrolledTooltip,
	Card, Button, CardHeader, CardFooter, CardBody,
  CardTitle, CardText, Table, Spinner, Progress,
	TabContent, TabPane, Nav, NavItem, NavLink, Input } from 'reactstrap';
import classnames from 'classnames';
import './style.scss';

class Manage extends Component {
	static propTypes = {
    t: PropTypes.any,
		updateModalBox: PropTypes.func
  };

	constructor(props) {
    super(props);
		this.toggleTab = this.toggleTab.bind(this);
    this.state = {
			text: '',
			activeTab: 1,
			countQa: 0,
			countUntrained: 0,
			countTrained: 0,
			showTraining: false,
			showSingleAnswer: false,
			showBulkAnswer: false,
			showImport: false,
			showExport: false
    };
  }

	toggleTab = (tab) => {
		if (this.state.activeTab !== tab) {
      this.setState({
        activeTab: tab
      });
    }
	}

	toggleTraining = (isClose) => {
		this.setState({
			showTraining: isClose
		});
	}

	toggleSingleAnswer = (isClose) => {
		this.setState({
			showSingleAnswer: isClose
		});
	}

	toggleBulkAnswer = (isClose) => {
		this.setState({
			showBulkAnswer: isClose
		});
	}

	toggleImportModal = (isClose) => {
		this.setState({
			showImport: isClose
		});
	}

	toggleExportModal = (isClose) => {
		this.setState({
			showExport: isClose
		});
	}

	updateCount = (type, count) => {
		this.setState({
			[type]: count
		});
	}

	changeText = event => {
		this.setState({
			text: event.value
		});
	}

	render() {
		const { t } = this.props;
		const { activeTab, countQa, countUntrained, countTrained } = this.state;
		return (
			<div className="containers">
        <h3>Manage NLP</h3>
				{/* TEST COMMON LIBRARY */}
				<TextField
					value={this.state.text}
					onChange={this.changeText}
					isRequiredMark
					isRequired
					texts={{
						hint: 'Provide an title',
						field: 'Title'
					}}
				/>
				<EmailInput
					value={this.state.text}
					onChange={this.changeText}
					isRequiredMark
        />
				{/* END TEST COMMON LIBRARY */}
        <div className="card card-default">
					<div className="card-header">
						<div className="manage-navi-header">
							<Nav tabs className="nav-tabs-simple reponsive-tab">
								<NavItem>
									<NavLink
										className={classnames({ active: activeTab === 1 })}
										onClick={() => { this.toggleTab(1); }}
									>
										{t('tab.verified')} <span className="badge">{countQa}</span>
									</NavLink>
								</NavItem>
								<NavItem>
									<NavLink
										className={classnames({ active: activeTab === 2 })}
										onClick={() => { this.toggleTab(2); }}
									>
										{t('tab.unanswered')} <span className="badge">{countUntrained}</span>
									</NavLink>
								</NavItem>
								<NavItem>
									<NavLink
										className={classnames({ active: activeTab === 3 })}
										onClick={() => { this.toggleTab(3); }}
									>
										{t('tab.answered')} <span className="badge">{countTrained}</span>
									</NavLink>
								</NavItem>
							</Nav>
						</div>
					</div>



          <div className="card-content">
          </div>
        </div>
      </div>
		);
	}
}
export default withTranslation()(withRouter(Manage));
//export default withNamespaces('translations')(Manage);
