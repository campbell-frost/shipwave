<script lang="ts">
	import type { Song } from '$lib/server/db/schema';

	const { songs } = $props();

	const bytes = new Uint8Array([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
	const songToCreate: Song = {
		id: '',
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

<div class="flex min-h-full items-center justify-center rounded-lg p-4">
	<button
		class="rounded-md bg-blue-500 p-2 text-white hover:bg-blue-600 active:bg-blue-700"
		onclick={createSong}
	>
		Upload Song
	</button>
	{#each songs as song}
		<div>{song.name}</div>
	{/each}
</div>
