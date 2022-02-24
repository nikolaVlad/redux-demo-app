import * as redux from 'redux';

const noticeStore = [];

/** Structure of items store
  {
    title : string ,
    description : string,
    done : boolean = false
  }
 */

const actions = {
  addNotice: 'ADD_NOTICE',
};

const noticeReducer = (store = noticeStore, { type, payload }) => {
  switch (type) {
    case actions.addNotice:
      return [
        ...store,
        {
          title: payload.title,
          description: payload.description,
          done: false,
        },
      ];
      break;
  }
};

export const add = (title, description) => {
  return {
    type: actions.addNotice,
    payload: { title, description },
  };
};

export const store = redux.createStore(noticeReducer);
