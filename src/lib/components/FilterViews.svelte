<script lang="ts">
    import { views } from '$lib/data/views'
</script>

<div>
	{#each views as view}
		<button class="button">
			<a href={ `/${ view.slug }` } class="button-text">
				{ view.name }
			</a>
		</button>
	{/each}
</div>

<style>
	.button {
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