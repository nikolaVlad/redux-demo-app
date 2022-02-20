import App from './components/App';
import './scss/main.scss';

const app = () => {
  const htmlApp = document.getElementById('app');
  htmlApp.innerHTML = App();
};

app();
