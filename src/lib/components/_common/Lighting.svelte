<script lang="ts">
	import { T } from '@threlte/core'
	import { Align, ContactShadows, Gizmo, OrbitControls, Sky, SoftShadows } from '@threlte/extras'
</script>

<SoftShadows size={20} />

<Sky
	turbidity={20}
	rayleigh={1.4}
	azimuth={180}
	elevation={6}
	mieCoefficient={0.00021}
	mieDirectionalG={0.83}
/>
