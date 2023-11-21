<script lang="ts">
    import {
        fullMoon,
        formatDate,
    } from '$lib/data/dates'    
</script>

<!-- TODO: create full moon/new moon/astrology sign template -->
<p>Previous full moon - { formatDate(fullMoon.previous) }</p>
{#each fullMoon.interval as fullMoonDate}
    <p>{formatDate(fullMoonDate)}</p>
{/each}
<p>Next full moon - { formatDate(fullMoon.next) }</p>

<style>
</style>