<script>
	import { Moon, Sun } from 'lucide-svelte';
	let darkMode = $state(false);

	$effect(() => {
		if (darkMode) {
			document.documentElement.setAttribute('style', 'color-scheme: dark');
			localStorage.setItem('theme', 'dark');
			console.log('dark');
		} else {
			document.documentElement.removeAttribute('style');
			localStorage.setItem('theme', 'light');
		}
	});
</script>

<button
	class="hover:bg-secondary rounded-md p-2 transition-colors"
	onclick={() => (darkMode = !darkMode)}
	aria-label="Toggle theme"
>
	{#if darkMode}
		<Sun />
	{:else}
		<Moon />
	{/if}
</button>
