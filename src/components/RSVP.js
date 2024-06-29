export default function RSVP() {
  return `
    <div class="mb-12">
      <p class="text-2xl font-semibold mb-4 text-primary">RSVP</p>
      <p class="mb-4 text-lg text-gray-700">Please scan the QR code to confirm your attendance:</p>
      <div id="qrcode" class="mx-auto bg-white p-4 inline-block rounded-lg shadow-lg transform transition duration-500 hover:rotate-3"></div>
    </div>
  `;
}