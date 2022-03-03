import './App.scss';
import { add, store } from '../redux/store.js';

const App = () => {
  const state = {
    title: '',
    description: '',
    done: false,
  };

  const noticePlaceId = 'noticePlace';

  const addNotice = (title, description) => {
    if (title.trim() !== '' && description.trim() !== '') {
      return store.dispatch(add(title, description));
    }

    alert('Please fill all fields.');
  };

  store.subscribe(() => {
    console.log('Store has changed.');
    console.log({ store: store.getState() });

    renderAllCards(store.getState(), noticePlaceId);
  });

  const onInput = (e) => {
    state[e.target.name] = e.target.value;
  };

  const renderCard = (index, title, description, done, targetElementId) => {
    // targetElement.innerHTML += `
    //   <div class="notice">
    //     <div class="notice-title"> Title </div>
    //     <hr />
    //     <div class="notice-description">
    //       Neki  text Neki  text
    //     </div>
    //   </div>
    // `;

    const notice = document.createElement('div');
    notice.className = 'notice';

    const noticeTitle = document.createElement('div');
    noticeTitle.className = 'notice-title';
    noticeTitle.innerText = title;

    const hr = document.createElement('hr');

    if (done) {
      hr.className = 'done';
    }

    const noticeDescription = document.createElement('div');
    noticeDescription.className = 'notice-description';
    noticeDescription.innerText = description;

    notice.append(noticeTitle, hr, noticeDescription);

    document.getElementById(targetElementId).append(notice);
  };

  const renderAllCards = (source, targetElementId) => {
    document.getElementById(targetElementId).innerHTML = '';
    for (const item of source) {
      const { title, description, done } = item;
      renderCard(0, title, description, done, targetElementId);
    }

    // const renderPlace = document.getElementById(targetElementId);
    // renderCard(undefined, undefined, undefined, renderPlace);
  };

  const render = () => {
    const container = document.createElement('div');
    container.classList.add('container');

    const card = document.createElement('div');
    card.classList = 'card';

    const mainPlace = document.createElement('div');
    mainPlace.className = 'main-place';
    mainPlace.id = 'mainPlaceId';

    const title = document.createElement('div');
    title.innerText = 'Notes';
    title.className = 'title';

    const inputForm = document.createElement('div');
    inputForm.className = 'input-form';

    const noticeTitle = document.createElement('input');
    noticeTitle.type = 'text';
    noticeTitle.placeholder = 'title';
    noticeTitle.name = 'title';
    noticeTitle.value = state.title;
    noticeTitle.addEventListener('input', onInput);

    const noticeDescription = document.createElement('textarea');
    noticeDescription.placeholder = 'description';
    noticeDescription.name = 'description';
    noticeTitle.value = state.description;
    noticeDescription.addEventListener('input', onInput);

    const noticeAddButton = document.createElement('button');
    noticeAddButton.innerText = '+ Add';
    noticeAddButton.addEventListener('click', () => {
      addNotice(state.title, state.description);
      noticeTitle.value = '';
      noticeDescription.value = '';
    });

    inputForm.append(noticeTitle, noticeDescription, noticeAddButton);

    const noticesPlace = document.createElement('div');
    noticesPlace.id = noticePlaceId;

    mainPlace.append(title, inputForm, noticesPlace);
    card.append(mainPlace);
    container.append(card);

    document.getElementById('app').append(container);
  };

  return render();
};

export default App;
