<script lang="ts">
	import '../app.css';
	let { children } = $props();
	import SideNav from '$lib/components/Sidenav.svelte';
	import Topnav from '$lib/components/Topnav.svelte';
	import { playbackData } from '$lib/data/playbackData';
	import Bottomnav from '$lib/components/Bottomnav.svelte';

	let isSideNavCollapsed = $state(false);
</script>
<div
	class="grid h-full min-h-screen gap-2 bg-background p-2 text-foreground text-white"
	style="grid-template-columns: {isSideNavCollapsed ? '75px' : '350px'} 1fr; grid-template-rows: auto 1fr auto;"
>
	<Topnav />
	<SideNav 
		isCollapsed={isSideNavCollapsed}
		onToggle={() => isSideNavCollapsed = !isSideNavCollapsed} 
	/>
	<main class="min-h-full overflow-auto">
		{@render children()}
	</main>
	<Bottomnav {...playbackData} />
</div>
