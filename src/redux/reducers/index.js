import { EDIT_PREMIUM, EDIT_BENEFIT } from '../constant/index';

const initialState = {
  config: {
    isEditPremium: false,
    isEditBenefit: false,
  },
};

function rootReducer(state = initialState, action) {
  if (action.type === EDIT_PREMIUM || action.type === EDIT_BENEFIT) {
    const newState = { config: { ...state.config, ...action.payload } };
    return newState;
  }
  return state;
}

export default rootReducer;
