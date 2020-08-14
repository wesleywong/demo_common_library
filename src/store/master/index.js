/* this named as reducer | mutation - which listen and make any changes
*/
import actions from './actions';
import { UPDATE_MODAL_BOX, UPDATE_HISTORY_OPEN } from './constants';

const initialState = {
	modalBox: {
		showModal: false,
		heading: '',
		displayText: '',
		callback: null,
		validStatus: null
	}
};

function master(state = initialState, action) {
	switch (action.type) {
		case UPDATE_MODAL_BOX:
			return Object.assign({}, state, {
				modalBox: action.modal
			});
		default:
			return state;
	}
}

export default master;
