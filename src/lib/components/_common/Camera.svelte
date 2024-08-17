<script lang="ts">
	import {
		Align,
		ContactShadows,
		Gizmo,
		OrbitControls,
		Sky,
		SoftShadows,
		TransformControls
	} from '@threlte/extras'
	import { onMount } from 'svelte'
	import { T } from '@threlte/core'
	import { interactivity } from '@threlte/extras'
	import { PerspectiveCamera, PointLight } from 'three'
	import { writable } from 'svelte/store'

	let lightPosition: any[] = [10, 35, 0]
	let camera: PerspectiveCamera

	$: lightPosition
</script>

<T.PerspectiveCamera
	rotation={[Math.PI / 2, 0, 0]}
	position={[10, 35, 0]}
	makeDefault
	fov={12}
	oncreate={({ ref }) => (camera = ref)}
>
	<OrbitControls
		maxAzimuthAngle={Math.PI / 2}
		enableDamping={true}
		rotateSpeed={0.5}
		zoomToCursor={true}
		zoomSpeed={2}
		minPolarAngle={0.1}
		maxPolarAngle={Math.PI / 2.2}
		enableZoom={true}
		onchange={({ target }) => {
			lightPosition = [camera.position.x - 10, 2, camera.position.z]
		}}
	/>
</T.PerspectiveCamera>

<T.PointLight color="white" intensity={100} position={lightPosition} />
