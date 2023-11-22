<script lang="ts">
    import Loader, { wait } from '$lib/components/Loader.svelte'
    import {
        astrologySigns,
        formatDate,
    } from '$lib/data/dates'    
</script>

{#await wait()}
    <Loader />
{:then}
    <!-- TODO: create full moon/new moon/astrology sign template -->
    <p>Previous astrology sign start date - { formatDate(astrologySigns.previous) }</p>
    {#each astrologySigns.interval as astrologySignDate}
        <p>{formatDate(astrologySignDate)}</p>
    {/each}
    <p>Next astrology sign start date - { formatDate(astrologySigns.next) }</p>
{/await}

<style>
</style>