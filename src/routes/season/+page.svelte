<script lang="ts">
    import Loader, { wait } from '$lib/components/Loader.svelte'
    import {
        seasons,
        formatDate,
    } from '$lib/data/dates'    
</script>

{#await wait()}
    <Loader />
{:then}
    <p>Previous season start date - { formatDate(seasons.previous) }</p>
    {#each seasons.interval as seasonDate}
        <p>{formatDate(seasonDate)}</p>
    {/each}
    <p>Next season start date - { formatDate(seasons.next) }</p>
{/await}

<style>
</style>