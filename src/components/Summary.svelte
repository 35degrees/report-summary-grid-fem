<script>
	import Categories from './Categories.svelte';
</script>

<section
	id="summary"
	class="flex h-full select-none flex-col items-center justify-center sm:gap-2 sm:px-8 sm:py-6 md:gap-4 md:px-8 md:py-8"
>
	<h2 class="sm:text-md w-full text-left font-semibold text-black md:text-lg">Summary</h2>
	<Categories />
	<button
		class="from-slateBlue to-royalBlue w-full rounded-full bg-gradient-to-t py-2 text-white hover:brightness-110 sm:mt-2 md:mt-3"
	>
		<p class="md:text-md font-normal tracking-wider sm:text-sm">Continue</p>
	</button>
</section>
