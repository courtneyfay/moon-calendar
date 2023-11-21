<script lang="ts">
    import {
        newMoon,
        formatDate,
    } from '$lib/data/dates'    
</script>

<!-- TODO: create full moon/new moon/astrology sign template -->
<p>Previous new moon - { formatDate(newMoon.previous) }</p>
{#each newMoon.interval as newMoonDate}
    <p>{formatDate(newMoonDate)}</p>
{/each}
<p>Next new moon - { formatDate(newMoon.next) }</p>

<style>
</style>