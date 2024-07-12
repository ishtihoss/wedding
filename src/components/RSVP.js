export default function RSVP() {
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