<script lang="ts">
    import { extend, T, useTask, useThrelte } from '@threlte/core'
    import { OrbitControls } from '@threlte/extras'
    import { CSS2DRenderer, CSS2DObject } from 'three/addons/renderers/CSS2DRenderer.js'
    import CssObject from './CssObject.svelte'
  
    const { scene, size, autoRenderTask, camera } = useThrelte()
  
    // Set up the CSS2DRenderer to run in a div placed atop the <Canvas>
    const element = document.querySelector('#css-renderer-target') as HTMLElement
    const cssRenderer = new CSS2DRenderer({ element })
    $: cssRenderer.setSize($size.width, $size.height)

    // test to see if it can work without separate file
    extend({
        CSS2DObject
    });
  
    // We are running two renderers, and don't want to run
    // updateMatrixWorld twice; tell the renderers that we'll handle
    // it manually.
    // https://threejs.org/docs/#api/en/core/Object3D.updateWorldMatrix
    scene.matrixWorldAutoUpdate = false
  
    // To update the matrices *once* per frame, we'll use a task that is added
    // right before the autoRenderTask. This way, we can be sure that the
    // matrices are updated before the renderers run.
    useTask(
      () => {
        scene.updateMatrixWorld()
      },
      { before: autoRenderTask }
    )
  
    // The CSS2DRenderer needs to be updated after the autoRenderTask, so we
    // add a task that runs after it.
    useTask(
      () => {
        // Update the DOM
        cssRenderer.render(scene, camera.current)
      },
      {
        after: autoRenderTask,
        autoInvalidate: false
      }
    )

    const text = document.createElement('div')
    text.textContent = 'Hello world!'
  </script>
  
  <T.PerspectiveCamera
    makeDefault
    position={[5, 5, 5]}
  >
    <OrbitControls enableDamping />
  </T.PerspectiveCamera>
  
  <T.DirectionalLight position={[0, 10, 10]} />
  
 
  <!-- this is how to do it without using separate cssobject file -->
    <T.CSS2DObject
        args={[text]}
        position={[-1, 2, 1]}
        center={[0, 0.5]}
    >
        <T.Mesh>
            <T.SphereGeometry args={[0.25]} />
            <T.MeshStandardMaterial color="#4F6FF6" />
        </T.Mesh>
    </T.CSS2DObject>
  
  <CssObject
    position={[1, 2, 1]}
    center={[0, 0.5]}
  >
    <div class="label">
        CSS
    </div>
  
    <T.Mesh slot="three">
      <T.SphereGeometry args={[0.25]} />
      <T.MeshStandardMaterial color="#6FF64F" />
    </T.Mesh>
  </CssObject>
  
  <CssObject
    position={[1, 2, -1]}
    center={[0, 0.5]}
  >
    <div class="label">
        Renderer
    </div>
  
    <T.Mesh slot="three">
      <T.SphereGeometry args={[0.25]} />
      <T.MeshStandardMaterial color="#F64F6F" />
    </T.Mesh>
  </CssObject>

  <style>
    .label {
        color: black;
    }
  </style>
  