<script lang="ts">
    let selectedId = 1;
    const views = [
		{ id: 1, name: 'One Moon' },
		{ id: 2, name: 'A Few Moons' },
		{ id: 3, name: 'Half Moon' },
		{ id: 4, name: 'New Moon' },
		{ id: 5, name: 'Full Moon' },
		{ id: 6, name: 'Astrological Sign' },
		{ id: 7, name: 'Season' },
		{ id: 8, name: 'Year' },
	];
</script>



<h1>Moon Calendar</h1>

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


<p>Current View: { selectedId }</p>