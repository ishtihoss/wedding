import Header from './components/Header.js';
import EventDetails from './components/EventDetails.js';
import RSVP from './components/RSVP.js';
import Quote from './components/Quote.js';
import { config } from './config.js';

export function App() {
  return `
    <div class="min-h-screen bg-wedding bg-cover bg-fixed p-8 relative overflow-hidden">
      <div class="fireworks absolute top-0 left-0 w-full h-full pointer-events-none"></div>
      <div class="fireworks absolute top-0 right-0 w-full h-full pointer-events-none"></div>
      <div class="container mx-auto bg-white bg-opacity-90 p-8 rounded-lg shadow-2xl relative z-10">
        ${Header()}
        ${EventDetails()}
        ${RSVP()}
        ${Quote()}
      </div>
    </div>
  `;
}

export async function generateHeadline() {
  // Simulated API response
  const headlines = ["Shamika & Ishtiaque: Love's Wildest Crossover Episode", 
  "Two Hearts, One Wi-Fi Password: Shamika and Ishtiaque Tie the Knot", 
  "Shamika Says 'I Do', Ishtiaque Says 'Me Too!'", 
  "Breaking News: Shamika and Ishtiaque Merge in Hostile Takeover of Love", 
  "Ishtiaque & Shamika: A Love Story Spicier Than Curry", 
  "Shamika and Ishtiaque: Proving Love is Weirder Than Fiction", 
  "Alert: Shamika and Ishtiaque Hack the Matrix of Matrimony", 
  "Extra! Extra! Shamika and Ishtiaque Rewrite the Laws of Attraction", 
  "Ishtiaque and Shamika: When Netflix and Chill Becomes Lifetime and Thrill", 
  "Shamika + Ishtiaque = ∞: The Math of Matrimony"];
  
  return new Promise((resolve) => {
    setTimeout(() => {
      const randomHeadline = headlines[Math.floor(Math.random() * headlines.length)];
      console.log('Generated headline:', randomHeadline);
      resolve(randomHeadline);
    }, 10); // Simulate network delay
  });
}

export function initializeHeader() {
  console.log('Initializing header');
  generateHeadline().then(headline => {
    console.log('Headline generated:', headline);
    const headlineElement = document.getElementById('headline');
    if (headlineElement) {
      headlineElement.textContent = headline;
      console.log('Headline set in DOM');
    } else {
      console.error('Headline element not found in DOM');
    }
  });

  const regenerateButton = document.getElementById('regenerateHeadline');
  if (regenerateButton) {
    regenerateButton.addEventListener('click', () => {
      console.log('Regenerate button clicked');
      const headlineElement = document.getElementById('headline');
      if (headlineElement) {
        headlineElement.textContent = 'Generating...';
        generateHeadline().then(headline => {
          headlineElement.textContent = headline;
          console.log('New headline set in DOM');
        });
      }
    });
  } else {
    console.error('Regenerate button not found in DOM');
  }
}

export function generateQRCode() {
  if (typeof qrcode !== 'undefined') {
    const qr = qrcode(0, 'M');
    qr.addData('https://docs.google.com/forms/d/1oru3XjnbAtoFqFCPkxyfPZ0tvkXDzpsiA2PpHDYUDWI/');
    qr.make();
    const qrcodeElement = document.getElementById('qrcode');
    if (qrcodeElement) {
      qrcodeElement.innerHTML = qr.createImgTag(5);
    }
  } else {
    console.error('QR code library not loaded');
  }
}