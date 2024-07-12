// src/components/Header.js
function Header() {
  return `
    <header class="text-center mb-8">
      <h1 class="text-4xl font-dancing-script mb-4">Shamika & Ishtiaque</h1>
      <div class="flex items-center justify-center">
        <h2 id="headline" class="text-2xl font-roboto italic mr-2">Loading...</h2>
        <i class="fas fa-heart text-red-500 text-2xl cursor-pointer" id="regenerateHeadline"></i>
      </div>
    </header>
  `;
}

// src/components/EventDetails.js
function EventDetails() {
  return `
    <div class="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
      <div class="text-center transform transition duration-500 hover:scale-105">
        <p class="text-2xl font-semibold mb-4 text-primary">Save the Date</p>
        <p class="text-xl text-gray-700">December 10, 2024</p>
        <div class="mt-4 animate-float">
          <svg class="w-12 h-12 mx-auto text-pink-300" fill="currentColor" viewBox="0 0 20 20">
            <path fill-rule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clip-rule="evenodd" />
          </svg>
        </div>
      </div>
      <div class="text-center transform transition duration-500 hover:scale-105">
        <p class="text-2xl font-semibold mb-4 text-primary">Venue</p>
        <p class="text-xl text-gray-700">Army Golf Club</p>
        <div class="mt-4 animate-float" style="animation-delay: 0.3s">
          <svg class="w-12 h-12 mx-auto text-pink-300" fill="currentColor" viewBox="0 0 20 20">
            <path fill-rule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clip-rule="evenodd" />
          </svg>
        </div>
      </div>
    </div>
  `;
}

// src/components/RSVP.js
function RSVP() {
  return `
    <div class="mb-12">
      <p class="text-2xl font-semibold mb-4 text-primary text-center">RSVP</p>
      <p class="mb-4 text-lg text-gray-700 text-center">Please scan the QR code to confirm your attendance:</p>
      <div class="flex justify-center">
        <div id="qrcode" class="bg-white p-4 rounded-lg shadow-lg transform transition duration-500 hover:rotate-3"></div>
      </div>
      <div class="mt-4 flex justify-center">
        <svg class="w-12 h-12 text-pink-300 animate-float" style="animation-delay: 0.6s" fill="currentColor" viewBox="0 0 20 20">
          <path fill-rule="evenodd" d="M18 5v8a2 2 0 01-2 2h-5l-5 4v-4H4a2 2 0 01-2-2V5a2 2 0 012-2h12a2 2 0 012 2zM7 8H5v2h2V8zm2 0h2v2H9V8zm6 0h-2v2h2V8z" clip-rule="evenodd" />
        </svg>
      </div>
    </div>
  `;
}

// src/components/Quote.js
function Quote() {
  return `
    <div class="mt-12 relative">
      <svg class="absolute top-0 left-0 w-16 h-16 text-pink-200 transform -translate-x-1/2 -translate-y-1/2 opacity-50" fill="currentColor" viewBox="0 0 24 24">
        <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
      </svg>
      <p class="font-script text-3xl text-primary relative z-10">"Two souls with but a single thought,<br>Two hearts that beat as one."</p>
      <svg class="absolute bottom-0 right-0 w-16 h-16 text-pink-200 transform translate-x-1/2 translate-y-1/2 opacity-50 rotate-180" fill="currentColor" viewBox="0 0 24 24">
        <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
      </svg>
    </div>
  `;
}

// src/main.js
function App() {
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
async function generateHeadline() {
  const headlines = [
    "Shamika & Ishtiaque: Love's Wildest Crossover Episode",
    "Two Hearts, One Wi-Fi Password: Shamika and Ishtiaque Tie the Knot",
    "Shamika Says 'I Do', Ishtiaque Says 'Me Too!'",
    "Breaking News: Shamika and Ishtiaque Merge in Hostile Takeover of Love",
    "Ishtiaque & Shamika: A Love Story Spicier Than Curry",
    "Shamika and Ishtiaque: Proving Love is Weirder Than Fiction",
    "Alert: Shamika and Ishtiaque Hack the Matrix of Matrimony",
    "Extra! Extra! Shamika and Ishtiaque Rewrite the Laws of Attraction",
    "Ishtiaque and Shamika: When Netflix and Chill Becomes Lifetime and Thrill",
    "Shamika + Ishtiaque = \u221E: The Math of Matrimony"
  ];
  return new Promise((resolve) => {
    setTimeout(() => {
      const randomHeadline = headlines[Math.floor(Math.random() * headlines.length)];
      console.log("Generated headline:", randomHeadline);
      resolve(randomHeadline);
    }, 10);
  });
}
function initializeHeader() {
  console.log("Initializing header");
  generateHeadline().then((headline) => {
    console.log("Headline generated:", headline);
    const headlineElement = document.getElementById("headline");
    if (headlineElement) {
      headlineElement.textContent = headline;
      console.log("Headline set in DOM");
    } else {
      console.error("Headline element not found in DOM");
    }
  });
  const regenerateButton = document.getElementById("regenerateHeadline");
  if (regenerateButton) {
    regenerateButton.addEventListener("click", () => {
      console.log("Regenerate button clicked");
      const headlineElement = document.getElementById("headline");
      if (headlineElement) {
        headlineElement.textContent = "Generating...";
        generateHeadline().then((headline) => {
          headlineElement.textContent = headline;
          console.log("New headline set in DOM");
        });
      }
    });
  } else {
    console.error("Regenerate button not found in DOM");
  }
}
function generateQRCode() {
  if (typeof qrcode !== "undefined") {
    const qr = qrcode(0, "M");
    qr.addData("https://example.com/rsvp");
    qr.make();
    const qrcodeElement = document.getElementById("qrcode");
    if (qrcodeElement) {
      qrcodeElement.innerHTML = qr.createImgTag(5);
    }
  } else {
    console.error("QR code library not loaded");
  }
}

// src/index.js
document.addEventListener("DOMContentLoaded", () => {
  console.log("DOM content loaded");
  const appElement = document.getElementById("app");
  if (appElement) {
    console.log("App element found, rendering content");
    appElement.innerHTML = App();
    initializeHeader();
    generateQRCode();
  } else {
    console.error('Element with id "app" not found');
  }
});
