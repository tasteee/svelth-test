<script lang="ts">
	import ChordCard from '../ChordCard/ChordCard.svelte'
	import Lighting from '../_common/Lighting.svelte'
	import chords from '$lib/consts/mockChord'
	import Camera from './Camera.svelte'
	import { interactivity } from '@threlte/extras'

	let rootNotes = Object.keys(chords) as (keyof typeof chords)[]
	interactivity()
</script>

<Lighting />
<Camera />

{#each [rootNotes[0]] as rootNote, rowIndex}
	{#each chords[rootNote] as symbol, columnIndex}
		<ChordCard {rowIndex} {columnIndex} {symbol} rowLength={chords[rootNote].length} />
	{/each}
{/each}
