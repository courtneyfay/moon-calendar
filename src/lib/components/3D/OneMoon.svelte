<script lang="ts">
  import { T, useTask } from '@threlte/core'
  import { OrbitControls } from '@threlte/extras'

  // animation
  let rotation = 0
  useTask((delta) => {
    rotation += delta
  })

  // programmatically setting up ring of spheres
  const positions: [number, number, number][] = [
    // quadrant one
    [3, 0, 0],
    [0.8, 2.9, 0],
    [1.5, 2.6, 0],
    [2.12, 2.12, 0],
    [2.6, 1.5, 0],
    [2.9, 0.8, 0],

    // quadrant two
    [0, 3, 0],
    [0.8, -2.9, 0],
    [1.5, -2.6, 0],
    [2.12, -2.12, 0],
    [2.6, -1.5, 0],
    [2.9, -0.8, 0],

    // quadrant three
    [0, -3, 0],
    [-0.8, -2.9, 0],
    [-1.5, -2.6, 0],
    [-2.12, -2.12, 0],
    [-2.6, -1.5, 0],
    [-2.9, -0.8, 0],

    // quadrant four
    [-3, 0, 0],
    [-0.8, 2.9, 0],
    [-1.5, 2.6, 0],
    [-2.12, 2.12, 0],
    [-2.6, 1.5, 0],
    [-2.9, 0.8, 0],
  ]

  const sphereSize = 0.5
  const sphereColor = '#ADB993'
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
  {#each positions as position}
    <T.Mesh position={position}>
      <T.SphereGeometry args={[sphereSize]} />
      <T.MeshStandardMaterial color={sphereColor} />
    </T.Mesh>
  {/each}
</T.Group>