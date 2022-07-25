let initialState = {
  '000aabb': {
    name: 'Axis Bank',
    code: 'AXISBNK',
    price: '300.00',
    changedValue: 0.1,
    changeType: 'UP',
  },
  '000aabbcc': {
    name: 'ICICI Bank',
    code: 'ICICIBNK',
    price: 350.35,
    changedValue: 0.15,
    changeType: 'UP',
  },
  '000aabbdd': {
    name: 'HDFC Bank',
    code: 'HDFCBNK',
    price: 700.13,
    changedValue: 0.73,
    changeType: 'DOWN',
  },
  '000abbdde': {
    name: 'HDFC Bank',
    code: 'GOOGLE',
    price: 700.13,
    changedValue: 0.73,
    changeType: 'DOWN',
  },
  '000aabfdd': {
    name: 'HDFC Bank',
    code: 'APPLE',
    price: 700.13,
    changedValue: 0.73,
    changeType: 'DOWN',
  },
  '000aabdd': {
    name: 'HDFC Bank',
    code: 'BAJAJ',
    price: 3445.13,
    changedValue: 0.73,
    changeType: 'UP',
  },
  '000aabbd': {
    name: 'HDFC Bank',
    code: 'BAJAJFINSERVE',
    price: 897.13,
    changedValue: 0.73,
    changeType: 'DOWN',
  },
  '000abbdd': {
    name: 'HDFC Bank',
    code: 'BAJAJFIN',
    price: 576.13,
    changedValue: 0.73,
    changeType: 'DOWN',
  },
  '000abdd': {
    name: 'HDFC Bank',
    code: 'ATUL',
    price: 340.13,
    changedValue: 0.73,
    changeType: 'UP',
  },
  '00aabdd': {
    name: 'HDFC Bank',
    code: 'UPLPHARMA',
    price: 446.13,
    changedValue: 0.73,
    changeType: 'DOWN',
  },
  '00aabdd': {
    name: 'HDFC Bank',
    code: 'LUPIN',
    price: 232.13,
    changedValue: 0.73,
    changeType: 'DOWN',
  },
  '00aabbd': {
    name: 'HDFC Bank',
    code: 'MAHINDRA',
    price: 454.13,
    changedValue: 0.73,
    changeType: 'DOWN',
  },
  '00aabbdz': {
    name: 'HDFC Bank',
    code: 'TATA',
    price: 342.13,
    changedValue: 0.73,
    changeType: 'DOWN',
  },
  '00aabbdze': {
    name: 'HDFC Bank',
    code: 'TCS',
    price: 3432.13,
    changedValue: 0.73,
    changeType: 'DOWN',
  },
  '00aabbdzw': {
    name: 'HDFC Bank',
    code: 'YESBNK',
    price: 52.13,
    changedValue: 0.73,
    changeType: 'DOWN',
  },
  '00aabbdzw': {
    name: 'HDFC Bank',
    code: 'PNBNK',
    price: 32.13,
    changedValue: 0.73,
    changeType: 'DOWN',
  },
};
import {CHANGE_SCRIPT_PRICE} from '../types';

export default (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_SCRIPT_PRICE: {
      return {
        ...state,
        [action.payload.scriptId]: {
          ...state[action.payload.scriptId],
          changedValue: action.payload.changedValue,
          price: action.payload.price,
        },
      };
    }
    default:
      return state;
  }
};
