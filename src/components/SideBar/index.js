import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { withTranslation } from 'react-i18next';
import logo from '../../assets/img/logo_white.png';
import logo2x from '../../assets/img/logo_white_2x.png';
import { NavLink } from 'react-router-dom';

class Sidebar extends PureComponent {
  static propTypes = {
    callback: PropTypes.func,
		t: PropTypes.any,
		location: PropTypes.any
  };

  constructor(props) {
    super(props);
    this.state = {
      open: false,
      click: true,
      show: false,
      sideBarWidth: 280 - 70,
      sidebarMenu: '',
			subOpen: ''
    };
    this.sidebar = React.createRef();
  }

  componentDidMount() {
    this.toggleMenuPin();
    this.props.callback(this.sidebar);
    window.addEventListener('resize', this.toggleMenuPin);
    document.getElementById('sidebar-menu').click();
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.toggleMenuPin);
  }

  isVisibleMd() {
    const element = document.getElementById('pg-visible-md');
    return element.offsetParent !== null;
  }

  isVisibleXs() {
    const element = document.getElementById('pg-visible-xs');
    return element.offsetParent !== null;
  }

  isVisibleSm() {
    const element = document.getElementById('pg-visible-sm');
    return element.offsetParent !== null;
  }

  toggleMenuPin() {
    const body = document.body;
    const width = window.innerWidth;
    if (width < 1200) {
      if (body.classList.contains('menu-pin')) {
        body.classList.remove('menu-pin');
        body.classList.add('menu-unpinned');
      }
    } else {
      if (body.classList.contains('menu-unpinned')) {
        body.classList.add('menu-pin');
      }
    }
  }

  handleClickPin() {
    const body = document.body;
    const toggle = this.state.show ? 'hide' : 'show';
    if (toggle === 'hide') {
      body.classList.remove('menu-pin');
      this.setState({ show: false });
    } else if (toggle === 'show') {
      body.classList.add('menu-pin');
      this.setState({ show: true });
    }
  }

  handleMouseEnter() {
    if (this.isVisibleSm() || this.isVisibleXs() || this.isVisibleMd()) {
      return false;
    }
    this.setState({ open: true });
    document.body.classList.add('sidebar-visible');
  }

  handleMouseLeave() {
    if (this.isVisibleSm() || this.isVisibleXs() || this.isVisibleMd()) {
      return false;
    }
    this.setState({ open: false });
    document.body.classList.remove('sidebar-visible');
  }

  handleMouseClick() {
    const body = document.body;
    body.classList.remove('sidebar-open');
    this.setState({ click: !this.state.click });
  }

	toggleSub = name => {
		const type = this.state.subOpen === name ? '' : name;
		this.setState({
			subOpen: type
		});
	}

  render() {
		const { t } = this.props;
    const { sidebarMenu, subOpen } = this.state;
    const sidebar_class = {
      transform:
        this.state.open === true
          ? 'translate3d(' + this.state.sideBarWidth + 'px, 0, 0)'
          : 'translate3d(0, 0, 0)'
    };
    const active_page = this.state.click ? ' click' : '';
		const pathname = '';
		const isNlp = pathname.indexOf('nlp') >= 0;
		const isFaq = pathname.indexOf('faq') >= 0;
		const public_url = (process.env.PUBLIC_URL) ? process.env.PUBLIC_URL : '';
    return (
      <nav
        className={'page-sidebar' + active_page}
        data-pages="sidebar"
        style={sidebar_class}
        onMouseEnter={this.handleMouseEnter.bind(this)}
        onMouseLeave={this.handleMouseLeave.bind(this)}
        ref={this.sidebar}
      >
        {/*<!-- BEGIN SIDEBAR MENU HEADER-->*/}
        <div className="sidebar-header">
          <img
            src={logo}
            alt="logo"
            className="brand"
            data-src={logo}
            data-src-retina={logo2x}
            width="120"
            height="45"
          />
          <div className="sidebar-header-controls">
            <button
              type="button"
              className="btn btn-link d-lg-inline-block d-xlg-inline-block d-md-none d-xs-none d-sm-none d-none p-r-5 p-l-5 m-l-10"
              data-toggle-pin="sidebar"
              onClick={this.handleClickPin.bind(this)}
            >
              <i className="material-icons" />
            </button>
          </div>
        </div>
        {/*<!-- END SIDEBAR MENU HEADER-->
        <!-- START SIDEBAR MENU -->*/}
        <div className="sidebar-menu" id="sidebar-menu">
					<ul className="m-t-30 menu-items">
						<li className={subOpen === 'nlp' ? 'open' : ''}>
	            <span className={'sub-label '+(isNlp ? 'active' : '')} onClick={() => this.toggleSub('nlp')}>
								<span className="title">{t('menu.nlp')}</span>
	            	<span className={'arrow '+(subOpen === 'nlp' ? 'open' : '')}></span>
								<span className="icon-thumbnail"><i className="material-icons">stars</i></span>
							</span>
	            <ul className="sub-menu">
								<li>
	                <NavLink exact to={`${public_url}/nlp-manage`} activeClassName="active">
										<span className="title">{t('menu.nlp.manage')}</span>
		                <span className="icon-thumbnail">
											<i className="material-icons">question_answer</i>
										</span>
									</NavLink>
	              </li>
	              <li className="">
	                <NavLink exact to={`${public_url}/nlp-dictionary`} activeClassName="active">
										<span className="title">{t('menu.nlp.manage.dictionary')}</span>
		                <span className="icon-thumbnail">
											<i className="material-icons">playlist_add</i>
										</span>
									</NavLink>
	              </li>
	            </ul>
	          </li>

						<li className={subOpen === 'faq' ? 'open' : ''}>
	            <span className={'sub-label '+(isFaq ? 'active' : '')} onClick={() => this.toggleSub('faq')}>
								<span className="title">{t('menu.faq')}</span>
	            	<span className={'arrow '+(subOpen === 'faq' ? 'open' : '')}></span>
								<span className="icon-thumbnail"><i className="material-icons">help_outline</i></span>
							</span>
	            <ul className="sub-menu">
	              <li className="">
	                <NavLink exact to={`${public_url}/faq-manage`} activeClassName="active">
										<span className="title">{t('menu.faq.manage')}</span>
		                <span className="icon-thumbnail">
											<i className="material-icons">question_answer</i>
										</span>
									</NavLink>
	              </li>
	            </ul>
	          </li>
						{/*<li>
							<NavLink exact to="/" activeClassName="active">
								<span className="title">Home</span>
								<span className="icon-thumbnail">
									<i className="material-icons">home</i>
								</span>
							</NavLink>
						</li>*/}
						<li>
							<NavLink to={`${public_url}/test`} activeClassName="active">
								<span className="title">{t('menu.test')}</span>
								<span className="icon-thumbnail">
									<i className="material-icons">check</i>
								</span>
							</NavLink>
						</li>
					</ul>
          <div className="clearfix" />
        </div>
        {/*<!-- END SIDEBAR MENU -->*/}
      </nav>
    );
  }
}

export default withTranslation()(Sidebar);
