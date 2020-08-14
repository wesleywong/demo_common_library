import React, { Component } from 'react';
import Select, { components } from 'react-select';
import PropTypes from 'prop-types';

class Selection extends Component {
	static propTypes = {
    title: PropTypes.any,
    icon: PropTypes.any,
    value: PropTypes.any,
    className: PropTypes.any,
    options: PropTypes.any,
		onChange: PropTypes.func
  };

  constructor(props) {
    super(props);
    this.state = {
      title: props.title || '',
      icon: props.icon || '',
      value: props.value || '',
      className: props.className || '',
      options: props.options || []
    };
  }

  SelectValueContainer = (icon, title) => ({ children, ...props }) => {
    return (
      <components.ValueContainer {...props}>
        <label className="text-muted m-b-0 m-l-5">
          <i className="material-icons md-18">{icon}</i>
          {title ? title + ':' : ''}
        </label>
        {children}
      </components.ValueContainer>
    );
  };

  render() {
    const { title, icon, value, className, options } = this.state;
    let { onChange } = this.props;
    if (typeof onChange === 'undefined') onChange = function() {};

    return (
      <Select
        options={options}
        value={value}
        hideSelectedOptions={true}
        components={{
          ValueContainer: this.SelectValueContainer(icon, title),
          Option: props => {
            const icon = props.data.icon;
            const className = props.data.className || '';
            return (
              <div
                {...props.innerProps}
                ref={props.innerRef}
                className={'react-select__option ' + className}
              >
                {icon ? icon : ''}&nbsp;
                {props.label}
              </div>
            );
          },
          SingleValue: props => {
            const icon = props.data.icon;
            return (
              <div className="m-l-5">
                {icon ? icon : ''}&nbsp;
                {props.children}
              </div>
            );
          }
        }}
        showNewOptionAtTop={true}
        onChange={onChange}
        menuPortalTarget={document.body}
        menuPlacement="auto"
        className={className}
        classNamePrefix="react-select-topnav"
        styles={{ menuPortal: base => ({ ...base, zIndex: 99999 }) }}
      />
    );
  }
}

export default Selection;
