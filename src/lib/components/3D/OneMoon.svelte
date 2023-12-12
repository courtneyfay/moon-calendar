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
  position={[5, 5, 6]}
  on:create={({ ref }) => {
    ref.lookAt(0, 0, 0)
  }}
>
  <!-- Allows user to interact with toroid -->
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

<!-- One Moon toroid -->
<T.Mesh
  position.y={1.75}
  rotation.x={Math.PI/2}
  castShadow
>
  <T.TorusGeometry
    args={[4, 1.15, 24, 24]}
  />
  <T.MeshStandardMaterial color="#ADB993" />
</T.Mesh>