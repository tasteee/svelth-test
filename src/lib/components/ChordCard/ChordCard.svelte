<script lang="ts">
	import { T } from '@threlte/core'
	import { theme } from '$lib/consts/theme'

	import { getRotation } from '../../../helpers/rotation'
	import { get } from 'svelte/store'
	import * as Tonal from 'tonal'
	import PianoRoll from '../PianoRoll.svelte'
	import ChordSymbol from './ChordSymbol.svelte'
	import ChordName from './ChordName.svelte'
	import ChordNotes from './ChordNotes.svelte'
	import { Edges, Outlines } from '@threlte/extras'

	export let symbol: string = ''
	export let rowIndex: number = 0
	export let columnIndex: number = 0
	export let rowLength: number = 0

	const chord = Tonal.Chord.get(symbol)
	const [positionX, positionY, positionZ] = [0 + rowIndex * 5.25, 0, 0 + columnIndex * -6.75]
</script>

<T.Group position={[positionX, positionY, positionZ]}>
	<!-- Container plane. -->
	<T.Mesh castShadow={true} receiveShadow={true}>
		<T.BoxGeometry args={[3.5, 0.15, 5]} />
		<T.MeshStandardMaterial color={theme.white} />
		<Outlines color={theme.black} />
		<Edges color={theme.black} />
	</T.Mesh>

	<T.Group position={[7.25, 0, 0]} rotation={getRotation(0, 0, 0)}>
		<ChordNotes notes={chord.notes} />
		<ChordSymbol {symbol} />
		<ChordName name={chord.name} />
	</T.Group>

	<PianoRoll chordSymbol={symbol} />
</T.Group>
