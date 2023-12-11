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
  position={[10, 10, 10]}
  on:create={({ ref }) => {
    ref.lookAt(0, 1, 0)
  }}
/>

<!-- Adds lighting -->
<T.DirectionalLight position={[0, 10, 10]}/>

<!-- Long 2D pink rectangle -->
<T.Mesh
  rotation.y={rotation}
  position.y={1} 
  scale={$scale}
  on:pointerenter={() => scale.set(1.5)}
  on:pointerleave={() => scale.set(1)}
>
  <T.BoxGeometry args={[1, 2, 1]} />
  <T.MeshStandardMaterial color="hotpink" />
</T.Mesh>