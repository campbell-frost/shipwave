<script>
	import { Ellipsis, House } from 'lucide-svelte';
	import Search from './Search.svelte';
	import ThemeToggle from './ThemeToggle.svelte';
</script>

<div class="col-span-2 flex h-16 w-full items-center  px-12 gap-x-8">
	<Ellipsis />
	<House />
	<Search />
	<ThemeToggle />
</div>
