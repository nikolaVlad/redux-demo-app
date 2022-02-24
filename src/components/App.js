import './App.scss';
import { add, store } from '../redux/store.js';

const App = () => {
  const addNotice = (title, description) => {
    store.dispatch(add(title, description));
  };

  store.subscribe(() => {
    console.log('Store has changed.');
    console.log({ store: store.getState() });
  });

  const render = () => {
    const container = document.createElement('div');
    container.classList.add('container');

    const card = document.createElement('div');
    card.classList = 'card';

    const mainPlace = document.createElement('div');
    mainPlace.className = 'main-place';

    const title = document.createElement('div');
    title.innerText = 'Notes';
    title.className = 'title';

    const inputForm = document.createElement('div');
    inputForm.className = 'input-form';

    const noticeTitle = document.createElement('input');
    noticeTitle.type = 'text';
    noticeTitle.placeholder = 'title';

    const noticeDescription = document.createElement('textarea');
    noticeDescription.placeholder = 'description';

    const noticeAddButton = document.createElement('button');
    noticeAddButton.innerText = 'Button';
    noticeAddButton.addEventListener('click', () => {
      addNotice('title', 'desc test');
    });

    inputForm.append(noticeTitle, noticeDescription, noticeAddButton);
    mainPlace.append(title, inputForm);
    card.append(mainPlace);
    container.append(card);

    document.getElementById('app').append(container);
  };

  return render();
};

export default App;
