<script lang="ts">
	import type { DashboardItemModel } from '$lib/data/types';

	const { thumbnail, title, href, color }: DashboardItemModel = $props();
</script>

<a
	{href}
	class="flex rounded-md bg-{color} m-1 transition-colors hover:bg-card-hover group-hover:bg-primary"
>
	<div class="flex rounded-md bg-{color}">
		<img src={thumbnail} alt={title} class="h-16 w-16 rounded-md" />
		<div class="flex flex-col justify-center">
			<h3 class="group ml-3 text-lg font-semibold">{title}</h3>
		</div>
	</div>
</a>
