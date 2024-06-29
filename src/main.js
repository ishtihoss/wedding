import Header from './components/Header.js';
import EventDetails from './components/EventDetails.js';
import RSVP from './components/RSVP.js';
import Quote from './components/Quote.js';

function App() {
  return `
    <div class="text-center">
      ${Header()}
      ${EventDetails()}
      ${RSVP()}
      ${Quote()}
    </div>
  `;
}

document.addEventListener('DOMContentLoaded', () => {
  const appElement = document.getElementById('app');
  if (appElement) {
    appElement.innerHTML = App();
    console.log('App content rendered');
  } else {
    console.error('Element with id "app" not found');
  }
});

// QR code generation
window.addEventListener('load', function() {
  const qrcodeElement = document.getElementById('qrcode');
  if (qrcodeElement) {
    var qr = qrcode(0, 'M');
    qr.addData('https://forms.gle/caXW6Fs5H2hYZ54T7');
    qr.make();
    qrcodeElement.innerHTML = qr.createImgTag(5);
  } else {
    console.error('Element with id "qrcode" not found');
  }
});