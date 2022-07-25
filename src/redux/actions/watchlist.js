import {CHANGE_SCRIPT_PRICE} from '../types';
export const changePrice = (item, price, changedValue) => dispatch => {
  dispatch({
    type: CHANGE_SCRIPT_PRICE,
    payload: {
      scriptId: item,
      price,
      changedValue,
    },
  });
};
