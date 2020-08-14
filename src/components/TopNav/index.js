import React, { PureComponent } from 'react';
import { withTranslation } from 'react-i18next';
import logo from '../../assets/img/logo.png';
import logo2x from '../../assets/img/logo_2x.png';
import profile from '../../assets/img/avatars/no_image.png';
import PropTypes from 'prop-types';
import Selection from '../Module/Selection';
import { UncontrolledButtonDropdown, DropdownMenu, DropdownItem, DropdownToggle, Label } from 'reactstrap';

class TopNav extends PureComponent {
  static propTypes = {
    display: PropTypes.bool,
		toggle: PropTypes.func,
    nodes: PropTypes.object,
    page: PropTypes.any,
    model: PropTypes.any,
    t: PropTypes.any
  };

  static defaultProps = {
    projects: []
  };

  constructor(props) {
    super(props);
    this.state = {
      showProfileDropDown: false,
      showPage: true
    };
  }

  toggleSideBar() {
    let timer;
    const body = document.body;
    const sidebarElem = this.props.nodes.current;
    const pageElem = this.props.page.current;
    const bodyColor = 'rgb(250, 250, 250)';
    pageElem.style.backgroundColor = bodyColor;
    if (body.classList.contains('sidebar-open')) {
      body.classList.remove('sidebar-open');
      timer = setTimeout(function() {
        sidebarElem.classList.remove('visible');
      }, 400);
    } else {
      clearTimeout(timer);
      sidebarElem.classList.add('visible');
      setTimeout(function() {
        body.classList.add('sidebar-open');
      }, 10);
      setTimeout(function() {
        pageElem.style.backgroundColor = '';
      }, 1000);
    }
  }

  toggleShowProfileDropDown = () => {
    const { showProfileDropDown: curr } = this.state;
    const showProfileDropDown = !curr;
    this.setState({ showProfileDropDown });
  };

  createHTMLOption(title, icon, name, option, keyIndex) {
    let select = <span>{name.label}</span>;
    if (option.length) {
      select = (
        <Selection
          title={title}
          icon={icon}
          options={option}
          value={name}
          onChange={event => {
            this.handleListClick(event, keyIndex);
          }}
        />
      );
    }

    return (
      <div className="inline">
        <div className="options pull-left">{select}</div>
      </div>
    );
  }

	toggleSettings = () => {
		this.props.toggle(true);
	}

	renderSettings = () => {
		return (
			<div className="settings-group cursor header-up" onClick={this.toggleSettings}>
				<div className="setting">
					<span className="item">
						<Label className="title">Project</Label>
						<i className="material-icons md-18">work_outline</i> <span>Demo Page UI</span>
					</span>
					<span className="item">
						<Label className="title">DialogFlow</Label>
						<i className="material-icons md-18">turned_in_not</i> <span>Nightly</span>
					</span>
					<span className="item">
						<Label className="title">Language</Label>
						<i className="material-icons md-18">translate</i> <span>English</span>
					</span>
					<span className="arrow"><i className="material-icons">keyboard_arrow_down</i></span>
				</div>
			</div>
		);
	}

  render() {
    const { t } = this.props;
    //get index page
    const indexPage = 1;
    //get index language
    const indexLanguage = 2;
    //get index category
    const indexCategory = 3;

    const { listPage, showPage } = this.state;
    //Create dropdown menu of pages
    const indexPageHTML = this.createHTMLOption(
      'Project',
      'folder',
			{
				value: 'demo',
				label: 'Demo Page UI'
			},
      [
				{
					value: 'demo',
					label: 'Demo Page UI'
				}
			],
      1
    );

    //Create dropdown menu of languages
    const indexLanguageHTML = this.createHTMLOption(
        'Language',
        'translate',
				{
					value: 'en',
					label: 'English'
				},
				[
					{
						value: 'en',
						label: 'English'
					}
				],
        2
      );

    //Create dropdown menu of category
    const indexCategoryHTML = this.createHTMLOption(
      'DialogFlow',
      'category',
			{
				value: 'nightly',
				label: 'Nightly'
			},
			[
				{
					value: 'nightly',
					label: 'Nightly'
				}
			],
      3
    );
    let space = <div className="inline">&nbsp;</div>;
    return (
      <div>
        <div className="header">
          <button
            className="btn-link toggle-sidebar d-lg-none pg pg-menu"
            data-toggle="sidebar"
            onClick={this.toggleSideBar.bind(this)}
          >
            <i className="material-icons">menu</i>
          </button>
          <div className="float-left align-self-start align-self-lg-center middle-brand">
            <div className="brand inline">
              <a href=".">
                <img
                  src={logo}
                  alt="logo"
                  data-src={logo}
                  data-src-retina={logo2x}
                  width="120"
                  height="45"
                />
              </a>
            </div>
            <div className="btn-group">
							{ this.renderSettings() }
            </div>
          </div>

          <div className="d-flex align-items-center">
            <div className="pull-left p-r-10 fs-14 font-heading d-lg-block d-none">
              <span className="semi-bold">
                John Wisdom
              </span>
            </div>

						<UncontrolledButtonDropdown className="profile-navi">
				      <DropdownToggle>
	              <img
	                src={profile}
	                alt=""
	                width="32"
	                height="32"
	              />
				      </DropdownToggle>
				      <DropdownMenu>
				        <DropdownItem>
									<span className="pull-left">Logout</span>
	                <span className="pull-right">
	                  <i className="material-icons md-18">lock</i>
	                </span>
								</DropdownItem>
				      </DropdownMenu>
				    </UncontrolledButtonDropdown>
          </div>
        </div>
        <div className="sub-header">
          { this.renderSettings() }
        </div>
      </div>
    );
  }
}
export default withTranslation()(TopNav);
