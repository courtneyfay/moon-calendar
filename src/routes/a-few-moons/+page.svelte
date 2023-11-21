<script lang="ts">
    import {
        yesterday,
        today,
        tomorrow,
        formatDate,
    } from '$lib/data/dates'    
</script>

<p>Yesterday, today, and tomorrow moons</p>
<p>{ formatDate(yesterday) } | { formatDate(today) } | { formatDate(tomorrow) }</p>

<style>
</style>