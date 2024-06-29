import './styles.css';
import App from './main.js';

document.addEventListener('DOMContentLoaded', () => {
  console.log('DOMContentLoaded event fired');
  const appElement = document.getElementById('app');
  if (appElement) {
    appElement.innerHTML = App();
    console.log('App content rendered');
  } else {
    console.error('Element with id "app" not found');
  }
});