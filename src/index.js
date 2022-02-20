import App from './components/App'
import './scss/app.scss';

const app = () =>
{
  const htmlApp = document.getElementById('app');
  htmlApp.innerHTML = App();
}

app();
