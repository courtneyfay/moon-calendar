<script lang="ts">
  import { extend, T, useTask, useThrelte } from '@threlte/core'
  import { OrbitControls } from '@threlte/extras'
  import { CSS2DRenderer, CSS2DObject } from 'three/addons/renderers/CSS2DRenderer.js'

  // animation
  let rotation = 0
  useTask((delta) => {
    rotation += delta
  })

  const sphereSize = 0.5
  const sphereColor = '#ADB993'

  const generateSphereLabel = (labelText: string) => {
    const text = document.createElement('div')
    text.textContent = labelText
    return text
  }

  type TSphere = {
    position: [number, number, number],
    eventTitle: HTMLDivElement,
  }

  // hardcoded ring of spheres
  const spheres: TSphere[] = [
    // todo: figure out how to programatically generate the positions (probably need to use radians/PI)
    // quadrant one
    {
        position: [0, 3, 0],
        eventTitle: generateSphereLabel('11 am'),
    },
    {
        position: [0.8, 2.9, 0],
        eventTitle: generateSphereLabel('12 pm'),
    },
    {
        position: [1.5, 2.6, 0],
        eventTitle: generateSphereLabel('1 pm'),
    },
    {
        position: [2.12, 2.12, 0],
        eventTitle: generateSphereLabel('2 pm'),
    },
    {
        position: [2.6, 1.5, 0],
        eventTitle: generateSphereLabel('3 pm'),
    },
    {
        position: [2.9, 0.8, 0],
        eventTitle: generateSphereLabel('4 pm'),
    },
    

    // quadrant two
    {
        position: [3, 0, 0],
        eventTitle: generateSphereLabel('5 pm'),
    },
    {
        position: [2.9, -0.8, 0],
        eventTitle: generateSphereLabel('6 pm'),
    },
    {
        position: [2.6, -1.5, 0],
        eventTitle: generateSphereLabel('7 pm'),
    },
    {
        position: [2.12, -2.12, 0],
        eventTitle: generateSphereLabel('8 pm'),
    },
    {
        position: [1.5, -2.6, 0],
        eventTitle: generateSphereLabel('9 pm'),
    },
    {
        position: [0.8, -2.9, 0],
        eventTitle: generateSphereLabel('10 pm'),
    },

    // quadrant three
    {
        position: [0, -3, 0],
        eventTitle: generateSphereLabel('11 pm'),
    },
    {
        position: [-0.8, -2.9, 0],
        eventTitle: generateSphereLabel('12 am'),
    },
    {
        position: [-1.5, -2.6, 0],
        eventTitle: generateSphereLabel('1 am'),
    },
    {
        position: [-2.12, -2.12, 0],
        eventTitle: generateSphereLabel('2 am'),
    },
    {
        position: [-2.6, -1.5, 0],
        eventTitle: generateSphereLabel('3 am'),
    },
    {
        position: [-2.9, -0.8, 0],
        eventTitle: generateSphereLabel('4 am'),
    },

    // quadrant four
    {
        position: [-3, 0, 0],
        eventTitle: generateSphereLabel('5 am'),
    },
    {
        position: [-2.9, 0.8, 0],
        eventTitle: generateSphereLabel('6 am'),
    },
    {
        position: [-2.6, 1.5, 0],
        eventTitle: generateSphereLabel('7 am'),
    },
    {
        position: [-2.12, 2.12, 0],
        eventTitle: generateSphereLabel('8 am'),
    },
    {
        position: [-1.5, 2.6, 0],
        eventTitle: generateSphereLabel('9 am'),
    },
    {
        position: [-0.8, 2.9, 0],
        eventTitle: generateSphereLabel('10 am'),
    },
  ]

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
    enableZoom={false}
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
    <T.CSS2DObject
      args={[sphere.eventTitle]}
      position={sphere.position}
      center={[0, 0.5]}
    >
      <T.Mesh>
        <T.SphereGeometry args={[sphereSize]} />
        <T.MeshStandardMaterial color={sphereColor} />
      </T.Mesh>
    </T.CSS2DObject>
  {/each}
</T.Group>