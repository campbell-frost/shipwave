<script>
	import { Ellipsis, House } from 'lucide-svelte';
	import Search from './Search.svelte';
	import ThemeToggle from './ThemeToggle.svelte';
</script>

<div class="col-span-2 flex h-16 w-full items-center justify-between gap-x-8 px-12">
	<button class="hover:bg-card-hover rounded-md p-2 transition-colors">
		<Ellipsis />
	</button>
	<div class="flex items-center gap-x-8">
		<button class="hover:bg-card-hover rounded-md p-2 transition-colors">
			<House />
		</button>
		<Search />
	</div>
	<ThemeToggle />
</div>
