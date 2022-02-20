import * as redux from 'redux';

const noticeStore = [];

const actions = {
  addNotice: 'ADD_NOTICE',
};

const noticeReducer = (store = noticeStore, action) => {
  console.log('Fired code in reducer function.');
  console.log(store);
  console.log(action);
};

const addNotice = () => {
  return {
    type: actions.addNotice,
  };
};

const store = redux.createStore(noticeReducer);

store.dispatch(addNotice());
