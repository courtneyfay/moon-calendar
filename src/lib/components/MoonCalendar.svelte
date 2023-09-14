<script lang="ts">
    import {
        yesterday,
        today,
        tomorrow,
        newMoon,
        fullMoon,
        formatDate,
    } from '$lib/data/dates'

    export let id: number;
    
</script>

{#if id === 1}
    <p>Current moon - { formatDate(today) }</p>
{:else if id === 2}
    <p>Yesterday, today, and tomorrow moons</p>
    <p>{ formatDate(yesterday) } | { formatDate(today) } | { formatDate(tomorrow) }</p>
{:else if id === 3}
    <p>Show from either the closest full moon to new moon, or the closest new moon to full moon</p>
{:else if id === 4}
    <p>Previous new moon - { formatDate(newMoon.previous) }</p>
    <p>PLUS all the dates in between!</p>
    <p>Next new moon - { formatDate(newMoon.next) }</p>
{:else if id === 5}
    <p>Previous full moon - { formatDate(fullMoon.previous) }</p>
    <p>PLUS all the dates in between!</p>
    <p>Next full moon - { formatDate(fullMoon.next) }</p>
{:else if id === 6}
    <p>Show from most recent astrological sign change to next astrological sign change</p>
{:else if id === 7}
    <p>Show from most recent season beginning (equinox or solstice) to next season equinox/solstice</p>
{:else}
    <p>what did you select?</p>
{/if}