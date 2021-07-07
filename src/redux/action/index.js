import { EDIT_PREMIUM, EDIT_BENEFIT } from '../constant/index';

export const editPremium = (payload) => ({ type: EDIT_PREMIUM, payload });
export const editBenefit = (payload) => ({ type: EDIT_BENEFIT, payload });
