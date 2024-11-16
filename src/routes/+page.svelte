<script lang="ts">
	import type { PageData } from './$types';
	import type { Song } from '$lib/server/db/schema';
	let { data } = $props<{ data: PageData }>();

	let audioUrl: string | null = null;

	let fileInput: HTMLInputElement;

	const openFileDialog = () => {
		fileInput.click();
	};

	const handleFileSelect = async (event: Event) => {
		const files = (event.target as HTMLInputElement).files;
		console.log(files);
	};


	const handleDrop = (e: DragEvent) => {
		e.preventDefault();
		console.log((e.target as HTMLInputElement).files);
	};
</script>

<div class="flex min-h-full flex-col items-center justify-center rounded-lg bg-card p-4">
	<div
		class="flex w-full flex-1 rounded-lg border-2 border-dashed border-white p-5 transition-all hover:bg-card-hover"
		ondrop={(e) => handleDrop(e)}
		ondragover={e => e.preventDefault()}
		role="button"
		tabindex="0"
	>
		<div class="flex w-full flex-col items-center justify-center gap-4">
			<input
				type="file"
				accept="audio/*"
				bind:this={fileInput}
				onchange={handleFileSelect}
				class="hidden"
			/>
			<button 
				onclick={openFileDialog}
				class="w-full h-full"
			>
				<p class="text-sm text-muted-foreground">Upload Song</p>
			</button>
		</div>
	</div>
</div>
