<script lang="ts">
    import {
        yesterday,
        today,
        tomorrow,
        newMoon,
        fullMoon,
        halfMoon,
        formatDate,
    } from '$lib/data/dates'

    export let id: number;
    
</script>

<!-- ✅ DONE -->
{#if id === 1}
    <p>Current moon - { formatDate(today) }</p>
<!-- ✅ DONE -->
{:else if id === 2}
    <p>Yesterday, today, and tomorrow moons</p>
    <p>{ formatDate(yesterday) } | { formatDate(today) } | { formatDate(tomorrow) }</p>

<!-- 🚧 IN PROGRESS -->
{:else if id === 3}
    <p>Show from either the closest full moon to new moon, or the closest new moon to full moon</p>
    <p>Previous moon - { formatDate(halfMoon.previous) }</p>
    {#each halfMoon.interval as intervalDate}
        <p>{formatDate(intervalDate)}</p>
    {/each}
    <p>Next moon - { formatDate(halfMoon.next) }</p>
<!-- 🚧 IN PROGRESS -->
{:else if id === 4}
    <p>Previous new moon - { formatDate(newMoon.previous) }</p>
    <p>PLUS the ~30 dates in between!</p>
    <p>Next new moon - { formatDate(newMoon.next) }</p>
<!-- 🚧 IN PROGRESS -->
{:else if id === 5}
    <p>Previous full moon - { formatDate(fullMoon.previous) }</p>
    <p>PLUS the ~30 dates in between!</p>
    <p>Next full moon - { formatDate(fullMoon.next) }</p>

<!-- ⛔️ NOT STARTED -->
{:else if id === 6}
    <p>Show from most recent astrological sign change to next astrological sign change</p>
<!-- ⛔️ NOT STARTED -->
{:else if id === 7}
    <p>Show from most recent season beginning (equinox or solstice) to next season equinox/solstice</p>

{:else}
    <p>what did you select?</p>
{/if}