<script>
	import { Ellipsis, House, Search, User } from 'lucide-svelte';
	import ThemeToggle from './ThemeToggle.svelte';
</script>

<div class="col-span-2 flex h-16 w-full items-center justify-between gap-x-8 bg-background">
	<button class="rounded-md p-2 transition-colors hover:bg-card-hover">
		<Ellipsis />
	</button>
	<div class="flex items-center gap-x-8">
		<button class="rounded-md p-2 transition-colors hover:bg-card-hover">
			<a href="/">
				<House />
			</a>
		</button>
		<div
			class="flex items-center justify-between gap-x-2 rounded-full bg-card px-4 py-3 transition-colors hover:border-primary hover:bg-card-hover"
		>
			<Search />
			<input
				type="text"
				placeholder="Search"
				class="border-none bg-transparent outline-none active:border-none"
			/>
		</div>
	</div>
	<div class="flex items-center gap-x-2">
		<ThemeToggle />
		<a href="/auth"> 
			<User />
		</a>
	</div>
</div>
