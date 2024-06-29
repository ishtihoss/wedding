(() => {
  // src/components/Header.js
  function Header() {
    return `
    <div class="text-center">
      <h1 class="font-script text-6xl text-primary mb-4 animate-float">Join Us in Celebration</h1>
      <div class="w-32 h-1 bg-primary mx-auto mb-8 animate-expand"></div>
      <h2 class="font-sans text-3xl text-gray-800 mb-12">
        <span class="block mb-2">Dr. Shamika Shabnam</span>
        <span class="block text-2xl text-primary">&</span>
        <span class="block mt-2">MD Ishtiaque Hossain</span>
      </h2>
    </div>
  `;
  }

  // src/components/EventDetails.js
  function EventDetails() {
    return `
    <div class="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
      <div class="text-center transform transition duration-500 hover:scale-105">
        <p class="text-2xl font-semibold mb-4 text-primary">Save the Date</p>
        <p class="text-xl text-gray-700">December 10, 2024</p>
      </div>
      <div class="text-center transform transition duration-500 hover:scale-105">
        <p class="text-2xl font-semibold mb-4 text-primary">Venue</p>
        <p class="text-xl text-gray-700">Army Golf Club</p>
      </div>
    </div>
  `;
  }

  // src/components/RSVP.js
  function RSVP() {
    return `
    <div class="mb-12">
      <p class="text-2xl font-semibold mb-4 text-primary">RSVP</p>
      <p class="mb-4 text-lg text-gray-700">Please scan the QR code to confirm your attendance:</p>
      <div id="qrcode" class="mx-auto bg-white p-4 inline-block rounded-lg shadow-lg transform transition duration-500 hover:rotate-3"></div>
    </div>
  `;
  }

  // src/components/Quote.js
  function Quote() {
    return `
    <div class="mt-12">
      <p class="font-script text-3xl text-primary">"Two souls with but a single thought,<br>Two hearts that beat as one."</p>
    </div>
  `;
  }

  // src/main.js
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
  document.addEventListener("DOMContentLoaded", () => {
    const appElement = document.getElementById("app");
    if (appElement) {
      appElement.innerHTML = App();
      console.log("App content rendered");
    } else {
      console.error('Element with id "app" not found');
    }
  });
  window.addEventListener("load", function() {
    const qrcodeElement = document.getElementById("qrcode");
    if (qrcodeElement) {
      var qr = qrcode(0, "M");
      qr.addData("https://forms.gle/caXW6Fs5H2hYZ54T7");
      qr.make();
      qrcodeElement.innerHTML = qr.createImgTag(5);
    } else {
      console.error('Element with id "qrcode" not found');
    }
  });
})();
