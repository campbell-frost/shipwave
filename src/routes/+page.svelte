<script lang="ts">
	import { dashboardItems } from '$lib/data/dashboardItems';
	import DashboardItem from '$lib/components/DashboardItem.svelte';

	type Selection = 'all' | 'music' | 'podcasts' | 'audio-books';

	let selected = $state<Selection>('all');

	const handleSelect = (value: Selection) => {
		selected = value;
	};
</script>

<div class="rounded-lg bg-card p-4">
	<div class="mb-4 flex justify-start gap-x-4">
		<button onclick={() => handleSelect('all')}>
			<p class="rounded-full bg-primary px-3 py-1 text-secondary">All</p>
		</button>
		<button onclick={() => handleSelect('music')}>
			<p class="rounded-full bg-primary px-3 py-1 text-secondary">Music</p>
		</button>
		<button onclick={() => handleSelect('podcasts')}>
			<p class="rounded-full bg-primary px-3 py-1 text-secondary">Podcasts</p>
		</button>
		<button onclick={() => handleSelect('audio-books')}>
			<p class="rounded-full bg-primary px-3 py-1 text-secondary">Audio Books</p>
		</button>
	</div>
	<div class="grid grid-cols-2 grid-rows-4 lg:grid-cols-4 lg:grid-rows-2">
		{#each dashboardItems as item}
			<DashboardItem {...item} />
		{/each}
	</div>
</div>
