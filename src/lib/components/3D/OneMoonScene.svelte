<script>
  import { T } from '@threlte/core'
  import { interactivity } from '@threlte/extras'
  import { spring } from 'svelte/motion'

  // makes interactivity possible
  interactivity()
  const scale = spring(1)
</script>
  
<!-- Adding perspective camera -->
<T.PerspectiveCamera
  makeDefault
  position={[10, 10, 10]}
  on:create={({ ref }) => {
    ref.lookAt(0, 1, 0)
  }}
/>

<!-- Long 2D pink rectangle -->
<T.Mesh
  position.y={1}
  scale={$scale}
  on:pointerenter={() => scale.set(1.5)}
  on:pointerleave={() => scale.set(1)}
>
  <T.BoxGeometry args={[1, 2, 1]} />
  <T.MeshBasicMaterial color="hotpink" />
</T.Mesh>