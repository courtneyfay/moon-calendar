<script lang="ts">
    import FilterViews from '$lib/components/FilterViews.svelte'
    let id = 1;
</script>



<h1>Moon Calendar</h1>

<FilterViews bind:selectedId={ id } />

<p>Current View: { id }</p>