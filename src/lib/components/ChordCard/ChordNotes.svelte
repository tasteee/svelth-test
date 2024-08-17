<script lang="ts">
	import { fonts, theme } from '$lib/consts/theme'
	import { T } from '@threlte/core'
	import { Edges, Text3DGeometry } from '@threlte/extras'
	import { getRotation } from '../../../helpers/rotation'
	import NoteMaterial from './NoteMaterial.svelte'
	export let notes: string[] = []

	const getNotePositionX = (note: string) => {
		const letterCount = note.length
		return letterCount * 0.06
	}

	const getGroupPositionX = (index: number) => {
		return 2 - index * 0.5
	}
</script>

<T.Group position={[-6.725, 0.1, 0]} castShadow={true} receiveShadow={true}>
	{#each notes as note, index}
		<T.Group position={[0, 0, getGroupPositionX(index)]}>
			<T.Mesh scale={[0.4, 0.35, 0.05]} rotation={getRotation(50, 0, 50)}>
				<T.BoxGeometry />
				<Edges color={theme.black} />
				<NoteMaterial {note} />
			</T.Mesh>
			<T.Mesh position={[0.06, 0, getNotePositionX(note)]} rotation={getRotation(50, 0, 50)}>
				<Text3DGeometry text={note} font={fonts[2]} depth={0.05} size={0.15} smooth={1} />
				<NoteMaterial {note} isOpposite />
			</T.Mesh>
		</T.Group>
	{/each}
</T.Group>
