<script>
    import { extend, T } from '@threlte/core'
    import { CSS2DObject } from 'three/addons/renderers/CSS2DRenderer.js'
  
    let element

    extend({
        CSS2DObject
    });
    console.log('element', element)
  </script>
  
<!--  -->

  <div
    bind:this={element}
  >
    <slot />
  </div>
  
  <!-- {#if element}
    <T {...$$restProps} is={CSS2DObject} args={[element]} let:ref>
      <slot name="three" {ref} />
    </T>
  {/if} -->
  
  {#if element}
    <T.CSS2DObject {...$$restProps} args={[element]} let:ref>
      <slot name="three" {ref} />
    </T.CSS2DObject>
  {/if}