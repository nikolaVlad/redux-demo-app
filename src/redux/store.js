import * as redux from 'redux';

const noticeStore = [];

const actions = {
  addNotice: 'ADD_NOTICE',
};

const noticeReducer = (store = noticeStore, action) => {
  switch (action.type) {
    case actions.addNotice:
      console.log('Desila se akcija ', action.type);
      console.log(store);
      break;
  }
};

export const add = () => {
  return {
    type: actions.addNotice,
  };
};

export const store = redux.createStore(noticeReducer);
