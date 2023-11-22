<script lang="ts">
    import Loader, { timeRemaining } from '$lib/components/Loader.svelte'
    import {
        today,
        formatDate,
    } from '$lib/data/dates'
</script>

{#if $timeRemaining !== 0}
    <Loader />
{:else}
    <p>Current moon - { formatDate(today) }</p>
{/if}

<style>
</style>