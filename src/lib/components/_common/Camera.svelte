<script lang="ts">
	import { OrbitControls } from '@threlte/extras'
	import { T } from '@threlte/core'
</script>

<T.PerspectiveCamera rotation={[Math.PI / 1, 0, 0]} position={[0.1, 100, 0]} makeDefault fov={3}>
	<OrbitControls
		enableDamping={true}
		zoomToCursor={true}
		zoomSpeed={2}
		enableZoom={true}
		enableRotate={false}
	/>
</T.PerspectiveCamera>
