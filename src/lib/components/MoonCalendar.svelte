<script lang="ts">
    export let id: number;
    let date: Date = new Date();
</script>

<p>Current View: { id }</p>

{#if id === 1}
    <p>Show one moon</p>
    <p>Date: { date }</p>
{:else if id === 2}
    <p>Show yesterday, today and tomorrow moons</p>
{:else if id === 3}
    <p>Show from either the closest full moon to new moon, or the closest new moon to full moon</p>
{:else if id === 4}
    <p>Show from most recent new moon to next new moon</p>
{:else if id === 5}
    <p>Show from most recent full moon to next full moon</p>
{:else if id === 6}
    <p>Show from most recent astrological sign change to next astrological sign change</p>
{:else if id === 7}
    <p>Show from most recent season beginning (equinox or solstice) to next season equinox/solstice</p>
{:else}
    <p>what did you select?</p>
{/if}