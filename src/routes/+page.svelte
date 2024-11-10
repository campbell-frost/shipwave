<script lang="ts">
	import { enhance } from '$app/forms';
	import type { PageData } from './$types';
	import type { Song } from '$lib/server/db/schema';
	let { data } = $props<{ data: PageData }>();

	const bytes = new Uint8Array([
		0x49, 0x44, 0x33, 0x03, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0xff, 0xfb, 0x90, 0x64, 0x52, 0x49,
		0x46, 0x46, 0x57, 0x41, 0x56, 0x45, 0x66, 0x6d, 0x74, 0x20, 0x10, 0x00, 0x00, 0x00
	]);

	const songToCreate: Song = {
		id: crypto.randomUUID(),
		name: 'test',
		userId: '6ad6150c-66c9-4509-9354-91bbba1c2dc3',
		bytes,
		duration: 10000,
		trackNumber: 0,
		fileFormat: 'mp3'
	};

	const createSong = async () => {
		try {
			await fetch('?/createSong', {
				method: 'POST',
				body: JSON.stringify({
					...songToCreate,
					bytes: Array.from(bytes)
				})
			});
		} catch (error) {
			console.error(error);
		}
	};
</script>

<div class="flex min-h-full flex-col items-center justify-center rounded-lg p-4">
	<button
		class="rounded-md bg-blue-500 p-2 text-white hover:bg-blue-600 active:bg-blue-700"
		onclick={createSong}
	>
		Upload Song
	</button>
	{#each data.songs as song}
		<div>{song.bytes}</div>
	{/each}
</div>
