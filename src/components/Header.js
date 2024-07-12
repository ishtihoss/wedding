export default function Header() {
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