<script>
  import { T, useTask } from '@threlte/core'
  import { interactivity } from '@threlte/extras'
  import { spring } from 'svelte/motion'

  // interactivity
  interactivity()
  const scale = spring(1)

  // animation
  let rotation = 0
  useTask((delta) => {
    rotation += delta
  })
</script>
  
<!-- Adding perspective camera -->
<T.PerspectiveCamera
  makeDefault
  position={[2, 2, 10]}
  on:create={({ ref }) => {
    ref.lookAt(0, 0, 0)
  }}
/>

<!-- Adds lighting and shadows -->
<T.DirectionalLight
  position={[0, 10, 10]}
  castShadow
/>

<!-- One Moon toroid -->
<T.Mesh
  position.y={1.75}
  rotation.x={360}
  castShadow
  scale={$scale}
  on:pointerenter={() => scale.set(1.5)}
  on:pointerleave={() => scale.set(1)}
>
  <T.TorusGeometry
    args={[4, 1.15, 24, 24]}
  />
  <T.MeshStandardMaterial color="#ADB993" />
</T.Mesh>