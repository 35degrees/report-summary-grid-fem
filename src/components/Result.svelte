<script>
	import CircleResult from './CircleResult.svelte';
	let score = 76;
</script>

<div
	class="from-slateBlue to-royalBlue container flex h-full w-full select-none flex-col items-center justify-start gap-2 rounded-b-xl bg-gradient-to-b px-6 text-center text-white sm:py-2 md:gap-0 md:rounded-xl md:py-8"
>
	<h3 class="opacity-70 sm:text-sm md:text-[1rem]">Your Result</h3>
	<CircleResult {score} />
	<div class="text-blurb flex w-4/5 flex-col gap-2 md:mb-5 md:gap-0">
		<h2 class="text-xl font-semibold md:text-2xl">Great</h2>
		<p class="text-[0.85rem] font-light leading-5 opacity-70 sm:-mt-2 md:mt-2">
			Your performance exceeds 65% of the people conducting the text here!
		</p>
	</div>
</div>
