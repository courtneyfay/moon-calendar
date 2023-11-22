<script lang="ts">
    import Loader, { wait } from '$lib/components/Loader.svelte'
    import {
        newMoon,
        formatDate,
    } from '$lib/data/dates'    
</script>

{#await wait()}
    <Loader />
{:then}
    <!-- TODO: create full moon/new moon/astrology sign template -->
    <p>Previous new moon - { formatDate(newMoon.previous) }</p>
    {#each newMoon.interval as newMoonDate}
        <p>{formatDate(newMoonDate)}</p>
    {/each}
    <p>Next new moon - { formatDate(newMoon.next) }</p>
{/await}


<style>
</style>