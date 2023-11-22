<script lang="ts">
    import Loader, { wait } from '$lib/components/Loader.svelte'
    import {
        fullMoon,
        formatDate,
    } from '$lib/data/dates'    
</script>

{#await wait()}
    <Loader />
{:then}
    <!-- TODO: create full moon/new moon/astrology sign template -->
    <p>Previous full moon - { formatDate(fullMoon.previous) }</p>
    {#each fullMoon.interval as fullMoonDate}
        <p>{formatDate(fullMoonDate)}</p>
    {/each}
    <p>Next full moon - { formatDate(fullMoon.next) }</p>
{/await}

<style>
</style>