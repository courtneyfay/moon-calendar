<script lang="ts">
    import { views } from '$lib/data/views'
    export let selectedId: number;
</script>

<div>
    <p>Filter buttons:</p>
    <select bind:value={selectedId}>
		{#each views as view}
			<option value={view.id}>
				{view.name}
			</option>
		{/each}
	</select>
</div>