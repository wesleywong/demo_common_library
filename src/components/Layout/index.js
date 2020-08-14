import React, { PureComponent, Fragment } from 'react';
import PropTypes from 'prop-types';
import {
	Container, Row, Col
} from 'reactstrap';
import { withTranslation } from 'react-i18next';
import SideBar from '../../components/SideBar';
import TopNav from '../../components/TopNav';
import Footer from '../../components/Footer';
import 'cplus_common_library/dist/index.css';

class Layout extends PureComponent {
  static propTypes = {
		i18n: PropTypes.any,
    children: PropTypes.any
  };

  constructor(props) {
    super(props);
    this.state = {
			sidebarElement: null,
			showSettings: false
    };
		this.page = React.createRef();
  }

	sideBarCallback = curr => {
    this.setState({ sidebarElement: curr });
  };

	toggleSettings = (isClose) => {
		this.setState({
			showSettings: isClose
		});
	}

  render() {
		const { i18n } = this.props;
		const lang = i18n.language === 'en-US'
			? 'en_US'
			: i18n.language === 'ja-JP'
				? 'ja_JP'
				: i18n.language;
    return (
      <Fragment>
					<SideBar callback={this.sideBarCallback} />
	        <div className="page-container" ref={this.page}>
	          <TopNav
	            nodes={this.state.sidebarElement}
							toggle={this.toggleSettings}
							page={this.page}
							/>
						<div className="page-content-wrapper">
	            <div className="content sm-gutter">
	              {/*<!-- START CONTAINER FLUID -->*/}
	              <div className="container-fluid container-fixed-lg">
	                {/*<!-- START BREADCRUMB -->*/}

	                {/*<!-- START CHILDREN -->*/}
	                <div className="row" id="page-container-body">
	                  <div className="col-12">{this.props.children}</div>
	                </div>
	              </div>
	            </div>
	            <Footer />
	          </div>
	        </div>
      </Fragment>
    );
  }
}
export default withTranslation()(Layout);
