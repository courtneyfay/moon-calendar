<script lang="ts">
    import { views } from '$lib/data/views'
</script>

<nav>
	{#each views as view}
		<a href={ `/${ view.slug }` }>
			{ view.name }
		</a>
	{/each}
</nav>

<style>
	a {
		/* font */
		font-family: 'Merriweather', serif;
		color: #685044;
		text-decoration: none;

		/* styles */
		background-color: white;
		padding: 10px;
		border: none;
		border-radius: 5px;
		margin-right: 5px;
	}

	a:hover {
		color: white;
		background-color: #801A86;
	}
	
	a:focus {
		color: white;
		background-color: #801A86;
	}
</style>