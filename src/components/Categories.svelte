<script>
	import data from '/src/lib/data.json';
</script>

<section id="categories" class="items-evenly flex w-full flex-col justify-center sm:gap-3 md:gap-4">
	{#each data as data, i}
		<div
			class="flex flex-row items-center justify-between sm:px-7 sm:py-2 md:px-4 md:py-2"
			style="background-color:{data.color2}"
		>
			<div class="left flex flex-row gap-2">
				<div class="icon">
					<img src={data.icon} alt="" />
				</div>
				<p class="text-sm font-medium" style="color:{data.color}">{data.category}</p>
			</div>
			<div class="right text-darkGreyBlue flex flex-row gap-2 text-sm">
				<p class="font-medium">{data.score}</p>
				<p class="font-light opacity-70">/ 100</p>
			</div>
		</div>
	{/each}
</section>
