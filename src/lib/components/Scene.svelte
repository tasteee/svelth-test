<script lang="ts">
	import { T } from '@threlte/core';
	import {
		ContactShadows,
		Float,
		Text3DGeometry,
		Grid,
		OrbitControls,
		Suspense,
		Text
	} from '@threlte/extras';
	import { getRotation } from '../../helpers/rotation';
	import { get } from 'svelte/store';
	import { fonts, areFontsLoaded, loadFonts } from '$lib/fontStore';
	import ControlPanel from './ControlPanel.svelte';
	import ChordCard from './ChordCard.svelte';
	import fSharpChords from '$lib/consts/FsharpMinor.chords.json';
	let fontLoader = loadFonts();
	let rootNotes = Object.keys(fSharpChords) as (keyof typeof fSharpChords)[];
</script>

<ControlPanel />

<!-- [12, 50, 0.5] -->
<T.PerspectiveCamera makeDefault position={[5, 20, 0.05]} fov={10}>
	<OrbitControls enableZoom={true} minDistance={15} maxDistance={75} enableDamping={true} />
</T.PerspectiveCamera>

<T.DirectionalLight intensity={3} position.x={5} position.y={10} />
<T.AmbientLight intensity={0.2} />
<ContactShadows scale={10} blur={2} far={2.5} opacity={0.5} />

<Grid
	scale={[20, 1, 20]}
	backgroundColor="#ffd4a3"
	backgroundOpacity={1}
	position.y={-0.001}
	cellDividers={true}
	cellThickness={2}
	type="grid"
	cellSize={0}
	sectionThickness={0}
	fadeDistance={666}
/>

{#each rootNotes as rootNote, rowIndex}
	{#each fSharpChords[rootNote] as symbol, columnIndex}
		<ChordCard {rowIndex} {columnIndex} {symbol} rowLength={fSharpChords[rootNote].length} />
	{/each}
{/each}
