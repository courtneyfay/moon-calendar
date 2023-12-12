<script>
    import { Canvas } from '@threlte/core'
    import Scene from './OneMoon.svelte'
</script>

<div class="wrapper">
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
</style>