import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';
import moment from 'moment';
import tz from 'moment-timezone';

export const columnDateTimeZone = (res) => {
	const date = moment.unix(res);
	const browserLoc = moment.tz.guess();
	let timeZone = date.tz(browserLoc).format(' z');
	timeZone = (browserLoc === 'Asia/Singapore') ? ' SGT' : timeZone;
	return {
		date: date.format('DD MMM YYYY'),
		time: date.format('HH:mm') +' '+ timeZone
	};
};

export const RandomDate = () => {
	return new Date(Number(new Date()) - Math.floor(Math.random()*10000000000));
};

export class Portal extends React.Component {
  static propTypes = {
    children: PropTypes.object,
    target: PropTypes.object
  };
  render() {
    const { children, target = document.body } = this.props;
    return ReactDOM.createPortal(children, target);
  }
}

export const truncateStr = (str, len = 30) => {
	return str.length > len ? str.substring(0, len - 3) + '...' : str;
};

export const timezoneOpts = () => {
	return (
		<>
			<option value="+00:00">GMT +00:00</option><option value="+01:00">GMT +01:00</option><option value="+02:00">GMT +02:00</option><option value="+03:00">GMT +03:00</option><option value="+03:30">GMT +03:30</option><option value="+04:00">GMT +04:00</option><option value="+04:30">GMT +04:30</option><option value="+05:00">GMT +05:00</option><option value="+05:30">GMT +05:30</option><option value="+05:45">GMT +05:45</option><option value="+06:00">GMT +06:00</option><option value="+06:30">GMT +06:30</option><option value="+07:00">GMT +07:00</option><option value="+08:00">GMT +08:00</option><option value="+08:45">GMT +08:45</option><option value="+09:00">GMT +09:00</option><option value="+09:30">GMT +09:30</option><option value="+10:00">GMT +10:00</option><option value="+10:30">GMT +10:30</option><option value="+11:00">GMT +11:00</option><option value="+12:00">GMT +12:00</option><option value="+13:00">GMT +13:00</option><option value="+13:45">GMT +13:45</option><option value="+14:00">GMT +14:00</option><option value="-01:00">GMT -01:00</option><option value="-02:00">GMT -02:00</option><option value="-02:30">GMT -02:30</option><option value="-03:00">GMT -03:00</option><option value="-04:00">GMT -04:00</option><option value="-05:00">GMT -05:00</option><option value="-06:00">GMT -06:00</option><option value="-07:00">GMT -07:00</option><option value="-08:00">GMT -08:00</option><option value="-09:00">GMT -09:00</option><option value="-09:30">GMT -09:30</option><option value="-10:00">GMT -10:00</option><option value="-11:00">GMT -11:00</option><option value="-12:00">GMT -12:00</option>
		</>
	);
};

export const randomString = len =>
  Array(len)
    .fill('0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz')
    .map(function(x) {
      return x[Math.floor(Math.random() * x.length)];
    })
    .join('');
