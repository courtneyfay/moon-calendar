<script>
  import { T, useTask } from '@threlte/core'
  import { OrbitControls } from '@threlte/extras'

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
>
  <!-- Allows user to interact with objects -->
  <OrbitControls
    enableDamping
    enableZoom={false}
    enablePan={false}
    rotateSpeed={0.25}
  />
</T.PerspectiveCamera>

<!-- Adds lighting and shadows -->
<T.DirectionalLight
  position={[0, 10, 10]}
  castShadow
/>
<T.AmbientLight />

<!-- One Moon toroid -->
<T.Mesh
  position.y={1.75}
  rotation.x={360}
  castShadow
>
  <T.TorusGeometry
    args={[4, 1.15, 24, 24]}
  />
  <T.MeshNormalMaterial color="#ADB993" />
</T.Mesh>