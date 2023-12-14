<script>
    import { Canvas } from '@threlte/core'
    import Scene from '$lib/components/3D/CSS2DRendererDemo.svelte'
</script>

<div id="css-renderer-target" />
<Canvas >
    <Scene />
</Canvas>

<style>
    #css-renderer-target {
        left: 0;
        position: absolute;
        pointer-events: none;
        top: 0;
    }
</style>