<script lang="ts">
    import {
        yesterday,
        today,
        tomorrow,
        fullMoon,
        halfMoon,
        newMoon,
        astrologySigns,
        seasons,
        formatDate,
    } from '$lib/data/dates'

    export let id: number;
    
</script>

<!-- TODO: create 1 moon template -->
{#if id === 1}   
    <p>Current moon - { formatDate(today) }</p>

<!-- TODO: create 3 moons template -->
{:else if id === 2}
    <p>Yesterday, today, and tomorrow moons</p>
    <p>{ formatDate(yesterday) } | { formatDate(today) } | { formatDate(tomorrow) }</p>

<!-- TODO: create half moon template -->
{:else if id === 3}
    <p>Show from either the closest full moon to new moon, or the closest new moon to full moon</p>
    <p>Previous moon - { formatDate(halfMoon.previous) }</p>
    {#each halfMoon.interval as halfMoonDate}
        <p>{formatDate(halfMoonDate)}</p>
    {/each}
    <p>Next moon - { formatDate(halfMoon.next) }</p>

<!-- TODO: create full moon/new moon/astrology sign template -->
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
    <p>Previous astrology sign start date - { formatDate(astrologySigns.previous) }</p>
    {#each astrologySigns.interval as astrologySignDate}
        <p>{formatDate(astrologySignDate)}</p>
    {/each}
    <p>Next astrology sign start date - { formatDate(astrologySigns.next) }</p>

<!-- TODO: create seasonal template -->
{:else if id === 7}
     <p>Previous season start date - { formatDate(seasons.previous) }</p>
    {#each seasons.interval as seasonDate}
        <p>{formatDate(seasonDate)}</p>
    {/each}
    <p>Next season start date - { formatDate(seasons.next) }</p>

{:else}
    <p>what did you select?</p>
{/if}