<script>
  import { createEventDispatcher } from 'svelte';
  const dispatch = createEventDispatcher();

  export let id, tags, title;

  function remove() {
		dispatch('remove', { id });
	}
</script>

<h3>{title}</h3>

{#if tags}
<ul>
  {#each tags as tag}
    &nbsp;#{tag}
	{/each}
</ul>
{/if}

<button on:click={remove}>🗑️</button>