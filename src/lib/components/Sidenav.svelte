<script lang="ts">
	import { NavCategory, type NavItemModel } from '$lib/data/types';
	import { Library, List, Plus, Search } from 'lucide-svelte';
	import { onMount } from 'svelte';
	import { navItems as items } from '$lib/data/navItems';
	interface Props {
		isCollapsed: boolean;
		onToggle: () => void;
	}

	let { isCollapsed, onToggle }: Props = $props();

	const capitalize = (str: string) => str.charAt(0).toUpperCase() + str.slice(1);

	const handleResize = () => {
		if (window.innerWidth <= 768 && !isCollapsed) {
			isCollapsed = true;
			onToggle();
		} else if (window.innerWidth > 768 && isCollapsed) {
			isCollapsed = false;
			onToggle();
		}
	};
	onMount(() => {
		handleResize();
		window.addEventListener('resize', handleResize);
		return () => window.removeEventListener('resize', handleResize);
	});

</script>

<nav class="flex flex-col rounded-md bg-card">
	<div class="px-3">
		<div class="px flex items-center justify-between py-3 font-bold text-foreground">
			<button class="text-bold flex items-center gap-x-2 pl-3" onclick={onToggle}>
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
		{/if}
		<div class="mb-4 flex justify-between text-foreground">
			{#if !isCollapsed}
				<Search size={20} />
				<div
					class="flex cursor-pointer gap-x-2 transition-all hover:text-primary"
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
			<div
				class={`group mx-1 mb-3 flex rounded-lg p-2 hover:bg-card-hover ${isCollapsed && 'hover:bg-transparent '}`}
			>
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
