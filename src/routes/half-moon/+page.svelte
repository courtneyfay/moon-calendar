<script lang="ts">
    import Loader, { wait } from '$lib/components/Loader.svelte'
    import {
        halfMoon,
        formatDate,
    } from '$lib/data/dates'    
</script>

{#await wait()}
    <Loader />
{:then}
    <p>Show from either the closest full moon to new moon, or the closest new moon to full moon</p>
    <p>Previous moon - { formatDate(halfMoon.previous) }</p>
    {#each halfMoon.interval as halfMoonDate}
        <p>{formatDate(halfMoonDate)}</p>
    {/each}
    <p>Next moon - { formatDate(halfMoon.next) }</p>
{/await}


<style>
</style>