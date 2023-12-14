<script lang="ts">
  import { extend, T, useTask, useThrelte } from '@threlte/core'
  import { OrbitControls } from '@threlte/extras'
  import { CSS2DRenderer, CSS2DObject } from 'three/addons/renderers/CSS2DRenderer.js'
  import { spheres } from '$lib/data/oneMoon'

  // animation
  let rotation = 0
  useTask((delta) => {
    rotation += delta
  })

  const sphereSize = 0.5
  const sphereColor = '#ADB993'

  // getting event title labels to be near spheres
  
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
  
<!-- Adding perspective camera -->
<T.PerspectiveCamera
  makeDefault
  position={[3, 3, 4.5]}
  on:create={({ ref }) => {
    ref.lookAt(0, 0, 0)
  }}
>
  <!-- Allows user to interact with ring of spheres -->
  <OrbitControls
    enableDamping
    dampingFactor={0.01}
    enableZoom={true}
    enablePan={false}
    rotateSpeed={0.25}
    minPolarAngle={Math.PI/3}
    maxPolarAngle={Math.PI/3}
  />
</T.PerspectiveCamera>

<!-- Adds lighting and shadows -->
<T.DirectionalLight
  position={[0, 10, 10]}
  castShadow
/>
<T.AmbientLight />

<!-- One Moon ring of spheres -->
<T.Group
  position.y={1.75}
  rotation.x={Math.PI/2}
  castShadow
>
  {#each spheres as sphere}
    <!-- todo: replace text with sphere.eventTitle somehow -->
    <!-- todo: figure out how to make each position unique, position={[-1, 2, 1]} -->
    <T.CSS2DObject
      args={[sphere.eventTitle]}
      position={sphere.position}
      center={[0, 0.5]}
    >
    <!-- position={sphere.position} -->
      <T.Mesh >
        <T.SphereGeometry args={[sphereSize]} />
        <T.MeshStandardMaterial color={sphereColor} />
      </T.Mesh>
    </T.CSS2DObject>
  {/each}
</T.Group>