<script lang="ts">
	import { type PlaybackModel } from '$lib/data/types';
	import Playback from './Playback.svelte';

	let { artist, title, thumbnail, songData }: PlaybackModel = $props();
</script>

<div
	class="col-span-2 grid w-full grid-cols-3 items-center justify-between gap-x-8 bg-background p-2"
>
	<div class="flex items-center">
		<img src={thumbnail} alt={title} class="h-16 w-16 rounded-lg" />
		<div class="ml-4 flex flex-col">
			<h3 class="text-lg font-semibold">{title}</h3>
			<p class="text-sm text-muted-foreground">{artist}</p>
		</div>
	</div>
	<Playback {...songData} />
	<div class="text-right"><p>hi</p></div>
</div>
