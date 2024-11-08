<script>
	import { Search } from 'lucide-svelte';
</script>

<div class="flex justify-between items-center px-4 py-3 bg-card rounded-full gap-x-2 hover:bg-card-hover hover:border-primary transition-colors ">
	<Search />
	<input 
		type="text" 
		placeholder="Search" 
		class="bg-transparent active:border-none outline-none border-none" 
	/>
</div>
