<script lang="ts">
	import {
		Play,
		Pause,
		Shuffle,
		SkipBack,
		SkipForward,
		Repeat,
		Repeat2,
		Repeat1
	} from 'lucide-svelte';
	import { Flow, type SongData } from '$lib/data/types';

	let { src }: SongData = $props();

	let isPlaying = $state(false);
	let flow = $state<Flow>(Flow.Repeat2);
	let time = $state(0);
	let duration = $state(0);

	const toggleFlow = () => {
		if (flow === Flow.Repeat) {
			flow = Flow.Repeat1;
		} else if (flow === Flow.Repeat1) {
			flow = Flow.Repeat2;
		} else {
			flow = Flow.Repeat;
		}
	};

	const formatTime = (time: number) => {
		return `${Math.floor(time / 60)}:${time % 60}`;
	};
</script>

<div class="flex flex-col items-center">
	<div class="flex items-center justify-center gap-x-3">
		<button>
			<Shuffle />
		</button>
		<button>
			<SkipBack />
		</button>
		<button onclick={() => (isPlaying = !isPlaying)}>
			{#if isPlaying}
				<Pause />
			{:else}
				<Play />
			{/if}
		</button>
		<button>
			<SkipForward />
		</button>
		{#if flow === Flow.Repeat}
			<button onclick={toggleFlow}>
				<Repeat />
			</button>
		{:else if flow === Flow.Repeat1}
			<button onclick={toggleFlow}>
				<Repeat1 />
			</button>
		{:else if flow === Flow.Repeat2}
			<button onclick={toggleFlow}>
				<Repeat2 />
			</button>
		{/if}
	</div>
	<div class="flex">
		<audio
			{src}
			bind:duration
			bind:currentTime={time}
			bind:paused={isPlaying}
			onended={() => (isPlaying = false)}
		>
			<button
				class="play"
				aria-label={isPlaying ? 'play' : 'pause'}
				onclick={() => (isPlaying = !isPlaying)}
			></button>
		</audio>
	</div>
</div>
