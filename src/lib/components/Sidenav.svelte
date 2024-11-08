<script lang="ts">
	import { NavCategory, type NavItemModel } from '$lib/data/types';
	import { ArrowRight, Library, List, Plus, Search } from 'lucide-svelte';

	interface Items {
		items: NavItemModel[];
	}

	let { items }: Items = $props();

	const capitalize = (str: string) => str.charAt(0).toUpperCase() + str.slice(1);
</script>

<nav class="row-span-3 mx-2 flex flex-col rounded-lg bg-zinc-900">
	<div class="px-4">
		<div class="px flex items-center justify-between py-3 font-bold text-foreground">
			<div class="text-bold flex items-center gap-x-2">
				<Library />
				<h2>Your Library</h2>
			</div>
			<button class="rounded-md p-2 transition-colors hover:bg-card-hover">
				<Plus />
			</button>
			<button class="rounded-md p-2 transition-colors hover:bg-card-hover">
				<ArrowRight />
			</button>
		</div>
		<div class="mb-4 flex items-center justify-between">
			<button class="rounded-full bg-card-hover px-3 py-[.33rem] text-sm font-semibold"
				>Playlists</button
			>
			<button class="rounded-full bg-card-hover px-3 py-[.33rem] text-sm font-semibold"
				>Artists</button
			>
			<button class="rounded-full bg-card-hover px-3 py-[.33rem] text-sm font-semibold"
				>Albums</button
			>
		</div>
		<div class="mb-4 flex justify-between text-foreground">
			<Search size={20} />
			<div class="flex cursor-pointer gap-x-2 transition-all transition-colors hover:text-primary">
				<p>Recents</p>
				<button>
					<List />
				</button>
			</div>
		</div>
	</div>
	<div class="top-3">
		{#each items as item}
			<div class="group mx-2 my-4 flex rounded-lg p-2 hover:bg-card-hover">
				{#if item.category === NavCategory.Artist}
					<img
						src={item.thumbnail}
						alt=""
						class="h-12 w-12 rounded-full object-contain transition-all group-hover:brightness-75"
					/>
				{:else}
					<img
						src={item.thumbnail}
						alt=""
						class="h-12 w-12 rounded-lg object-contain transition-all group-hover:brightness-75"
					/>
				{/if}
				<div class="ml-4 flex flex-col justify-center">
					<h3>{item.title}</h3>
					{#if item.description}
						<p class="text-sm text-muted-foreground">
							{capitalize(item.category)} • {item.description}
						</p>
					{:else}
						<p class="text-sm text-muted-foreground">
							{capitalize(item.category)}
						</p>
					{/if}
				</div>
			</div>
		{/each}
	</div>
</nav>
