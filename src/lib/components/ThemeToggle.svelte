<script>
	import { Moon, Sun } from 'lucide-svelte';
	let darkMode = $state(false);

	$effect(() => {
		const savedTheme = localStorage.getItem('theme');
		if (savedTheme) {
			darkMode = savedTheme === 'dark';
		} else {
			darkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
		}
	});

	$effect(() => {
		if (darkMode) {
			document.documentElement.setAttribute('style', 'color-scheme: dark');
			document.documentElement.classList.add('dark');
			localStorage.setItem('theme', 'dark');
			console.log('dark');
		} else {
			document.documentElement.removeAttribute('style');
			document.documentElement.classList.remove('dark');
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
