<script lang="ts">
    import FilterViews from '$lib/components/FilterViews.svelte'
    import MoonCalendar from '$lib/components/MoonCalendar.svelte'
    let id = 1;
</script>

<h1>Moon Calendar</h1>

<FilterViews bind:selectedId={ id } />
<MoonCalendar id={ id } />