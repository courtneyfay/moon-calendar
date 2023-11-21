<script lang="ts">
    import ViewButtons from '$lib/components/ViewButtons.svelte'
</script>

<div class="navigation">
    <div class="header">
        <img class="logo" src="/moon-icon.png" alt="new moon phase"/>
        <a href="/">
            <h1>Moon Calendar</h1>
        </a>
    </div>

    <ViewButtons  />
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

    a {
        color: white;
        text-decoration: none;
    }

    .header {
        display: flex;
        align-items: center;
    }

    .logo {
        max-height: 50px;
    }
</style>