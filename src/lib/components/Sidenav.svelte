<script lang="ts">
	import { NavCategory, type NavItemModel } from '$lib/data/types';
	import { ArrowRight, Library, List, Plus, Search } from 'lucide-svelte';

	interface Items {
		items: NavItemModel[];
	}

	let { items }: Items = $props();

	let isCollapsed = $state(false);

	const capitalize = (str: string) => str.charAt(0).toUpperCase() + str.slice(1);
</script>

<nav class={`flex flex-col rounded-md bg-zinc-900 px-3`}>
	<div class="">
		<div class="px flex items-center justify-between py-3 font-bold text-foreground">
			<button
				class="text-bold flex items-center gap-x-2 pl-3"
				onclick={() => (isCollapsed = !isCollapsed)}
			>
				<Library />
				{#if !isCollapsed}
					<h2>Your Library</h2>
				{/if}
			</button>
			{#if !isCollapsed}
				<button class="rounded-md transition-colors hover:bg-card-hover">
					<Plus />
				</button>
			{/if}
		</div>
		{#if !isCollapsed}
			<div class="mb-4 flex items-center justify-between">
				<button class="rounded-full bg-card-hover px-2 py-[.33rem] text-sm font-semibold"
					>Playlists</button
				>
				<button class="rounded-full bg-card-hover px-2 py-[.33rem] text-sm font-semibold"
					>Artists</button
				>
				<button class="rounded-full bg-card-hover px-2 py-[.33rem] text-sm font-semibold"
					>Albums</button
				>
			</div>
		{/if}
		<div class="mb-4 flex justify-between text-foreground">
			{#if !isCollapsed}
				<Search size={20} />
				<div
					class="flex cursor-pointer gap-x-2 transition-all transition-colors hover:text-primary"
				>
					<p>Recents</p>
					<button>
						<List />
					</button>
				</div>
			{/if}
		</div>
	</div>
	<div class="top-3">
		{#each items as item}
			<div class="group mb-3 flex rounded-lg p-2 hover:bg-card-hover sm:p-0">
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
				{#if !isCollapsed}
					<div class="ml-4 flex flex-col justify-center md:block">
						{#if item.description}
							<h3>{item.title}</h3>
							<p class="text-sm text-muted-foreground">
								{capitalize(item.category)} • {item.description}
							</p>
						{:else}
							<p class="text-sm text-muted-foreground">
								{capitalize(item.category)}
							</p>
						{/if}
					</div>
				{/if}
			</div>
		{/each}
	</div>
</nav>
