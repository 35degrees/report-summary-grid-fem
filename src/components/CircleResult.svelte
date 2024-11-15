<script>
	let { score } = $props();
</script>

<div
	class="from-violetBlue to-persianBlue relative flex flex-col items-center justify-center rounded-full bg-gradient-to-b p-10 text-white sm:w-2 sm:gap-0 md:my-5 md:h-full md:gap-4 md:p-16"
>
	<div class="absolute flex flex-col sm:mt-1 sm:gap-0 md:mt-2">
		<h2 class="text-3xl font-extrabold md:text-5xl md:font-bold">{score}</h2>
		<p class="opacity-40 sm:text-[0.7rem] md:text-[0.9rem]">of 100</p>
	</div>
</div>
