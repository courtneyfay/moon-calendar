<script lang="ts">
    import { views } from '$lib/data/views'
    export let selectedId: number;
</script>

<div>
    <select class="dropdown" bind:value={selectedId}>
		{#each views as view}
			<option value={view.id}>
				{view.name}
			</option>
		{/each}
	</select>
</div>

<style>
	.dropdown {
		/* font */
		font-family: 'Merriweather', serif;
		color: #685044;

		/* styles */
		background-color: white;
		padding: 10px;
		border: none;
		border-radius: 5px;
	}
</style>