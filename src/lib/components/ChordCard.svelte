<script lang="ts">
	import { T } from '@threlte/core';
	import { theme } from '$lib/consts/theme';
	import {
		Align,
		ContactShadows,
		Float,
		MeshLineGeometry,
		MeshLineMaterial,
		Text3DGeometry
	} from '@threlte/extras';
	import { getRotation } from '../../helpers/rotation';
	import { fonts } from '$lib/fontStore';
	import { get } from 'svelte/store';
	import * as Tonal from 'tonal';
	import { Vector3 } from 'three';
	export let symbol: string = '';
	export let rowIndex: number = 0;
	export let columnIndex: number = 0;
	export let rowLength: number = 0;

	const points = [new Vector3(-5, 1, 0), new Vector3(0, 1, 0), new Vector3(5, 1, 0)];
	const chord = Tonal.Chord.get(symbol);
	console.log({ symbol, rowIndex, columnIndex });
	const [positionX, positionY, positionZ] = [-15 + rowIndex * 5.25, 3, 0 + columnIndex * -6.75];
</script>

<!-- position: cardVert, actualVert, cardHoriz -->

<T.Group position={[positionX, positionY, positionZ]}>
	<T.Mesh rotation={getRotation(0, 0, 100)}>
		<T.BoxGeometry args={[3.5, 0.15, 5]} />
		<T.MeshLambertMaterial color="#f9e6cf" />
	</T.Mesh>

	<T.Mesh scale={[0.5, 0.5, 0.5]} position={[-0.75, 0.2, 2.2]} rotation={getRotation(50, 0, 50)}>
		<Text3DGeometry
			text={symbol}
			font={'/fonts/NewSpiritBold.json'}
			bevelEnabled={true}
			bevelOffset={0}
			bevelSegments={0}
			bevelSize={0}
			bevelThickness={0.1}
			curveSegments={12}
			depth={0.1}
			size={0.5}
			smooth={1}
		/>
		<T.MeshStandardMaterial color="#0f2a3f" toneMapped={false} metalness={1.0} roughness={0.1} />
	</T.Mesh>

	<T.Mesh scale={[0.5, 0.5, 0.5]} position={[-1.2, 0.05, 2.2]} rotation={getRotation(50, 0, 50)}>
		<Text3DGeometry
			text={chord.name}
			font={'/fonts/AreaNormalRegular.json'}
			bevelEnabled={true}
			bevelOffset={0}
			bevelSegments={0}
			bevelSize={0}
			bevelThickness={0.1}
			curveSegments={12}
			depth={0.1}
			size={0.35}
			smooth={1}
		/>
		<T.MeshStandardMaterial color="#cc9562" toneMapped={false} metalness={0.25} roughness={0.95} />
	</T.Mesh>
	<!-- 
	<T.Mesh>
		<MeshLineGeometry {points} />
		<MeshLineMaterial width={0.5} color="#fe3d00" />
	</T.Mesh> -->

	<T.Mesh position={[0, 0.113, -2.9]} rotation={getRotation(-8, 0, 0)}>
		<T.BoxGeometry args={[3.5, 0.15, 1]} />
		<T.MeshStandardMaterial color="#f9e6cf" />
	</T.Mesh>
</T.Group>
