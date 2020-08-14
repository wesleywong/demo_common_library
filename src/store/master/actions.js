import { UPDATE_MODAL_BOX } from './constants';

export function updateModalBox(modal) {
	return {
		type: UPDATE_MODAL_BOX,
		modal
	};
}
