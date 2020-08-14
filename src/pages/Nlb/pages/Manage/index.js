import React from 'react';
import { connect } from 'react-redux';
import view from 'pages/Nlb/pages/Manage/view';
import { updateModalBox } from 'store/master/actions';

const mapStateToProps = state => {
	return {
	};
};

const mapDispatchToProps = {
  updateModalBox
};

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(view);
