<script lang="ts">
	import '../app.css';
	let { children } = $props();
	import SideNav from '$lib/components/Sidenav.svelte';
	import Playback from '$lib/components/Playback.svelte';
	import { navItems as items } from '$lib/data/navItems';
	import Topnav from '$lib/components/Topnav.svelte';
	import { playbackData } from '$lib/data/playbackData';
	import Bottomnav from '$lib/components/Bottomnav.svelte';
</script>

<div
	class="grid h-full min-h-screen grid-cols-[300px_1fr] grid-rows-[auto_1fr_auto] bg-background text-foreground text-white gap-1"
>
	<Topnav />
	<SideNav {items} />
	<main class="min-h-full overflow-auto">
		{@render children()}
	</main>
	<Bottomnav {...playbackData} />
</div>
