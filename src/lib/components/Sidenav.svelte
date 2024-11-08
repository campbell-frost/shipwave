<script lang="ts">
  import type { NavItemModel } from "$lib/data/types";
  import NavItem from "./NavItem.svelte";
  let { items } = $props<{ items: NavItemModel[] }>();
</script>

<nav class="flex flex-col bg-zinc-900 row-span-3">
  {#each items as item}
    <NavItem {item} />
  {/each}
</nav>
