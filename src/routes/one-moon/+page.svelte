<script lang="ts">
    import SceneWrapper from '$lib/components/3D/SceneWrapper.svelte'
    import Loader, { wait } from '$lib/components/Loader.svelte'

    import {
        today,
        formatDate,
    } from '$lib/data/dates'
</script>

{#await wait()}
    <Loader />
{:then}
    <div id="date">
        { formatDate(today) }
    </div>
    <SceneWrapper />
{/await}

<style>
    #date {
      position: absolute;
      top: 33%;
      width: 100%;
      text-align: center;
      z-index: 100;
    }
</style>