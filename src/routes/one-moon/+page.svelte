<script lang="ts">
    import SceneWrapper from '$lib/components/3D/SceneWrapper.svelte'
    import Loader, { wait } from '$lib/components/Loader.svelte'
    import {
        today,
        formatDate,
    } from '$lib/data/dates'
</script>

<!-- {#await wait()}
    <Loader />
{:then} -->
    <p>Current moon - { formatDate(today) }</p>
    <SceneWrapper />
<!-- {/await} -->

<style>
</style>