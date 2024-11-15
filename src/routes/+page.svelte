<script>
	import Result from '../components/Result.svelte';
	import Summary from '../components/Summary.svelte';
</script>

<div class="container mx-auto flex h-screen w-full justify-center sm:items-start md:items-center">
	<div
		class="grid-container bg-lightCream grid w-full grid-rows-1 rounded-xl sm:h-[500px] sm:grid-cols-1 sm:grid-rows-[42%_58%] sm:gap-0 md:h-[350px] md:w-[560px] md:grid-cols-[48%_52%] md:grid-rows-1"
	>
		<Result />
		<Summary />
	</div>
</div>

<style>
</style>
