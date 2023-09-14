<script lang="ts">
    import {
        yesterday,
        today,
        tomorrow,
        fullMoon,
        halfMoon,
        newMoon,
        astrologySigns,
        formatDate,
    } from '$lib/data/dates'

    export let id: number;
    
</script>

<!-- ✅ DONE -->
{#if id === 1}
    <p>Current moon - { formatDate(today) }</p>
{:else if id === 2}
    <p>Yesterday, today, and tomorrow moons</p>
    <p>{ formatDate(yesterday) } | { formatDate(today) } | { formatDate(tomorrow) }</p>
{:else if id === 3}
    <p>Show from either the closest full moon to new moon, or the closest new moon to full moon</p>
    <p>Previous moon - { formatDate(halfMoon.previous) }</p>
    {#each halfMoon.interval as halfMoonDate}
        <p>{formatDate(halfMoonDate)}</p>
    {/each}
    <p>Next moon - { formatDate(halfMoon.next) }</p>
{:else if id === 4}
    <p>Previous new moon - { formatDate(newMoon.previous) }</p>
    {#each newMoon.interval as newMoonDate}
        <p>{formatDate(newMoonDate)}</p>
    {/each}
    <p>Next new moon - { formatDate(newMoon.next) }</p>
{:else if id === 5}
    <p>Previous full moon - { formatDate(fullMoon.previous) }</p>
    {#each fullMoon.interval as fullMoonDate}
        <p>{formatDate(fullMoonDate)}</p>
    {/each}
    <p>Next full moon - { formatDate(fullMoon.next) }</p>
{:else if id === 6}
    <p>Show from most recent astrological sign change to next astrological sign change</p>
    <p>Previous astrology sign start date - { formatDate(astrologySigns.previous) }</p>
    {#each astrologySigns.interval as astrologySignDate}
        <p>{formatDate(astrologySignDate)}</p>
    {/each}
    <p>Next astrology sign start date - { formatDate(astrologySigns.next) }</p>

<!-- ⛔️ NOT STARTED -->
{:else if id === 7}
    <p>Show from most recent season beginning (equinox or solstice) to next season equinox/solstice</p>

{:else}
    <p>what did you select?</p>
{/if}