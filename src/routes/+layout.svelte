<script>
    import Header from '$lib/components/Header.svelte'

    // add css styles to entire project
    import '$lib/styles/global.css'
</script>

<main class="page">
    <Header />
    <slot />
</main>

<style>
    .page {
        /* styles */
        background-color: #CFBFF7;
        height: 100vh;

        /* font */
        color: #685044;
        font-family: 'Merriweather', serif;
    }
</style>
