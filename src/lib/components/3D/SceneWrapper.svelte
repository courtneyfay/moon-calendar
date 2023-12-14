<script>
    import { Canvas } from '@threlte/core'
    import Scene from './OneMoon.svelte'
</script>

<div class="wrapper">
    <div id="css-renderer-target" />
    <Canvas >
        <Scene />
    </Canvas>
</div>

<style>
    .wrapper {
        position: relative;
        background-color: #CFBFF7;
        height: 100vh;
        width: 100vw;
    }

    #css-renderer-target {
        left: 0;
        position: absolute;
        pointer-events: none;
        top: 0;
    }
</style>