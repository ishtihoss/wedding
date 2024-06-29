export default function EventDetails() {
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