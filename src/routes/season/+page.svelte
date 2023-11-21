<script lang="ts">
    import {
        seasons,
        formatDate,
    } from '$lib/data/dates'    
</script>

<p>Previous season start date - { formatDate(seasons.previous) }</p>
{#each seasons.interval as seasonDate}
    <p>{formatDate(seasonDate)}</p>
{/each}
<p>Next season start date - { formatDate(seasons.next) }</p>

<style>
</style>