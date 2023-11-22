<script lang="ts">
    import Loader, { wait } from '$lib/components/Loader.svelte'
    import {
        yesterday,
        today,
        tomorrow,
        formatDate,
    } from '$lib/data/dates'
</script>

{#await wait()}
    <Loader />
{:then}
    <p>Yesterday, today, and tomorrow moons</p>
    <p>{ formatDate(yesterday) } | { formatDate(today) } | { formatDate(tomorrow) }</p>
{/await}

<style>
</style>