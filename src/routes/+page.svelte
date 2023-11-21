<script lang="ts">
    import Header from '$lib/components/Header.svelte'
    import MoonCalendarSwitch from '$lib/components/MoonCalendarSwitch.svelte'
    let id = 1;
</script>

<div class="page">
    <Header />
    <MoonCalendarSwitch id={ id } />
</div>

<style>
    /* css reset */
    :global(body) { 
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    
    .page {
        background-color: #CFBFF7;

        /* font */
        color: #685044;
        font-family: 'Merriweather', serif;
    }
</style>