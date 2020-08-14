import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { UncontrolledTooltip, UncontrolledPopover, PopoverHeader, PopoverBody } from 'reactstrap';
import { randomString } from 'core/helpers';
import { withNamespaces } from 'react-i18next';

class LabelTooltip extends Component {
  static propTypes = {
    text: PropTypes.string,
    tip: PropTypes.string,
    labelClass: PropTypes.string,
    wrapperClass: PropTypes.string,
    helpMarkup: PropTypes.string,
		tipType: PropTypes.string,
		tipHeader: PropTypes.string,
		tipTrigger: PropTypes.string,
    t: PropTypes.any
  };

  constructor(props) {
    super(props);
    this.state = {
      id: 'tips_' + randomString(10)
    };
  }

  handleClick = event => {
    event.preventDefault();
    event.stopPropagation();
  };

  render() {
    const { text, tip, wrapperClass, labelClass, helpMarkup, t, tipType, tipHeader, tipTrigger } = this.props;
    const { id } = this.state;
    const wrapperClassName = typeof wrapperClass === 'undefined' ? 'inline' : wrapperClass;
    const labelClassName = typeof labelClass === 'undefined' ? 'inline' : labelClass;
		const tooltipType = typeof tipType === 'undefined' ? 'tip' : tipType;
		const tooltipHeader = typeof tipHeader === 'undefined' ? 'Info' : tipHeader;
		const tooltipTrigger = typeof tipTrigger === 'undefined' ? 'hover' : tipTrigger;
    return (
      <div className={wrapperClassName}>
        <label className={labelClassName}>
          <span style={{ flex: '1' }}>{text} </span>
          <i className="material-icons md-18 text-muted m-l-5 align-top" id={id} onClick={this.handleClick}>
            help_outline
          </i>
          {helpMarkup==='required' && <div className="help help-ast">required</div>}
        </label>
				{ tooltipType === 'tip' && (
					<UncontrolledTooltip placement="auto" target={id}>
	          {tip}
	        </UncontrolledTooltip>
				)}
				{ tooltipType === 'popover' && (
					<UncontrolledPopover placement="bottom" target={id} className="popover-tooltip" trigger={tooltipTrigger}>
		        <PopoverHeader>{tooltipHeader}</PopoverHeader>
		        <PopoverBody dangerouslySetInnerHTML={{ __html: tip }} />
		      </UncontrolledPopover>
				)}
      </div>
    );
  }
}

export default withNamespaces('translations')(LabelTooltip);
