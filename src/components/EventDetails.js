export default function EventDetails() {
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