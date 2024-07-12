import { App, initializeHeader, generateQRCode } from './main.js';

document.addEventListener('DOMContentLoaded', () => {
  console.log('DOM content loaded');
  const appElement = document.getElementById('app');
  if (appElement) {
    console.log('App element found, rendering content');
    appElement.innerHTML = App();
    initializeHeader();
    generateQRCode();
  } else {
    console.error('Element with id "app" not found');
  }
});