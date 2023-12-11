<script lang="ts">
	import { goto } from '$app/navigation'

	import { page } from '$app/stores'
    import { views, type TView } from '$lib/data/views'

	// plays gong sound when button is clicked
	let src = '/gong.mp3'
	let time = 0
	let paused = true

	const handleClick = (view: TView) => {
		paused = !paused
		goto(`/${ view.slug }`)
	}
</script>

<nav>
	<audio
		{src}
		bind:currentTime={time}
		bind:paused
		preload="metadata"
		on:ended={() => {
			time = 0
			paused = true
		}}
	/>

	{#each views as view}
		<button
			on:click={() => handleClick(view)}
			class:active={ $page.url.pathname.includes(view.slug) }
		>
			{ view.name }
		</button>
	{/each}
</nav>

<style>
	button {
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

	button:hover {
		color: white;
		background-color: #801A86;
		cursor: pointer;
	}

	button.active {
		color: white;
		background-color: #801A86;
	}
</style>