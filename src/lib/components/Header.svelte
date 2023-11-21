<script lang="ts">
    import FilterViews from '$lib/components/FilterViews.svelte'
    let id = 1;
</script>

<div class="navigation">
    <div class="header">
        <img class="logo" src="/moon-icon.png" alt="new moon phase"/>
        <h1>Moon Calendar</h1>
    </div>

    <FilterViews bind:selectedId={ id } />
</div>

<style>
    .navigation {
        /* layout */
        display: flex;
        justify-content: space-around;
        align-items: center;

        /* font */
        color: white;
        background-color: #4E0250;
    }

    .header {
        display: flex;
        align-items: center;
    }

    .logo {
        max-height: 50px;
    }
</style>