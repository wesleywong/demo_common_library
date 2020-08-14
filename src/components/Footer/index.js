import React, { PureComponent } from 'react';
import { withTranslation } from 'react-i18next';
import PropTypes from 'prop-types';

class Footer extends PureComponent {
	static propTypes = {
    i18n: PropTypes.object,
    t: PropTypes.any
  };

  changeLanguage = event => {
		const i18next = this.props.i18n;
		console.log(i18next);
    const value = event.currentTarget.value;
		console.log(value);
    localStorage.setItem('sysLanguage', value);
    i18next.changeLanguage(value);
    // switch(value){
    //   case 'ja-JP': i18n.use(locale_ja_JP); break;
    //   case 'zh-TW': i18n.use(locale_zh_TW); break;
    //   default: i18n.use(locale_en_US); break;
    // }
  };

  render() {
    //const { t, i18n } = this.props;
    let lang = localStorage.getItem('sysLanguage')
      ? localStorage.getItem('sysLanguage')
      : 'en';
    return (
      <div className="container-fluid container-fixed-lg footer">
        <div className="row copyright sm-text-center">
          <div className="col-md-12 col-sm-12">
            <p className="small no-margin sm-pull-reset">
              <span className="hint-text">Copyright &copy; 2018 </span>
              <span className="font-montserrat">
                Social Gear - Chat Responser
              </span>
              .<span className="hint-text"> All rights reserved. </span>
            </p>
          </div>

          <div className="col-md-12 col-sm-12">
            <select
              className="form-control select-lang m-t-10"
              value={lang}
              onChange={this.changeLanguage}
            >
              <option value="en_US">English</option>
              <option value="ja_JP">Japanese</option>
              <option value="zh_TW">Traditional Chinese</option>
            </select>
          </div>
        </div>
      </div>
    );
  }
}
export default withTranslation()(Footer);
