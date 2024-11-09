<script lang="ts">
	import type { DashboardItemModel } from '$lib/data/types';
	import { createEventDispatcher } from 'svelte';
	const { thumbnail, title, href, color }: DashboardItemModel = $props();

	let hovered = $state(false);
	const dispatch = createEventDispatcher<{ hover: string }>();

	$effect(() => {
		dispatch('hover', hovered ? color : 'bg-foreground');
	});
</script>

<a
	{href}
	class={`m-1 flex rounded-md p-2 transition-colors duration-1000`}
	style:background-color={hovered ? color : 'transparent'}
	onmouseover={() => (hovered = true)}
	onmouseleave={() => (hovered = false)}
	onfocus={() => (hovered = true)}
	onblur={() => (hovered = false)}
>
	<div class="flex rounded-md">
		<img src={thumbnail} alt={title} class="h-16 w-16 rounded-md" />
		<div class="flex flex-col justify-center">
			<h3 class="group ml-3 text-lg font-semibold">{title}</h3>
		</div>
	</div>
</a>
