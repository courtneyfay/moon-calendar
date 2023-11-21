<script>
    import Header from '$lib/components/Header.svelte'
</script>

<Header />

<main class="page">
    <slot />
</main>

<style>
    .page {
        /* styles */
        background-color: #CFBFF7;
        height: 88vh;

        /* font */
        color: #685044;
        font-family: 'Merriweather', serif;
    }
</style>
