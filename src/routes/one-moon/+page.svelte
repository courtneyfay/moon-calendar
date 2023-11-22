<script lang="ts">
    import Loader, { wait } from '$lib/components/Loader.svelte'
    import {
        today,
        formatDate,
    } from '$lib/data/dates'
</script>

{#await wait()}
    <Loader />
{:then}
    <p>Current moon - { formatDate(today) }</p>
{/await}

<style>
</style>