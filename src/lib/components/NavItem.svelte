<script lang="ts">
  import type { NavItemModel } from "$lib/data/types";
  let { item } = $props<{ item: NavItemModel }>();
</script>

<div class="flex bg-zinc-800 my-4">
  <img src={item.thumbnail} alt="" class="w-16 h-16 rounded-lg object-contain" />
  <div class="flex flex-col">
    <h3>{item.title}</h3>
    <p>{item.description}</p>
  </div>
</div>
