import './App.scss';
import '../redux/store.js';

const App = () => {
  // const addNotice = () => {
  //   console.log('radi funckija');
  // };

  // #point
  // Need return code transform from innerHtml to
  // DOM nodes structure.

  return `
  <div class="container">
  <div class="card">
    <div class="main-place">
      <div class="title">Notes</div>
      <div class="input-form">
        <input placeholder="title" type="text">
        <textarea placeholder="description"></textarea>
        <button onClick="addNotice()">Add</button>
      </div>
      <div class="notices-wrapper">

        <div class="notice-card">
          <!-- Place for all notices  -->
        </div>
      </div>
    </div>
  </div>
</div>
  `;
};

export default App;
