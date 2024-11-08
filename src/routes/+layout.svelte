<script lang="ts">
	import '../app.css';
	let { children } = $props();
	import SideNav from '$lib/components/Sidenav.svelte';
	import { navItems as items } from '$lib/data/navItems';
	import TopNav from '$lib/components/TopNav.svelte';
</script>

<div class="grid h-full min-h-screen grid-cols-[250px_1fr] grid-rows-[auto_1fr_auto] text-white bg-background text-foreground">
	<TopNav  />
	<SideNav {items} />
	<main class="overflow-auto min-h-full">
		{@render children()}
	</main>
	<TopNav />
</div>
