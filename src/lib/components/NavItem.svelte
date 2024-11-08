<script lang="ts">
	import type { NavItemModel } from '$lib/data/types';
	let { item } = $props<{ item: NavItemModel }>();
</script>

<div class="my-4 flex bg-red-400">
	<img src={item.thumbnail} alt="" class="h-16 w-16 rounded-lg object-contain" />
	<div class="flex flex-col">
		<h3>{item.title}</h3>
		<p>{item.description}</p>
	</div>
</div>
