<script lang="ts">
	import { onMount } from 'svelte';
	import { T } from '@threlte/core';
	import { FontLoader } from 'three/examples/jsm/loaders/FontLoader.js';
	import { TextGeometry } from 'three/examples/jsm/geometries/TextGeometry.js';

	let font: any;

	onMount(() => {
		const fontLoader = new FontLoader();
		const fonts = {} as any;

		function loadFont(url: string, name: string) {
			return new Promise((resolve, reject) => {
				const handleSuccess = (font: any) => {
					fonts[name] = font;
					resolve(font);
				};

				fontLoader.load(url, handleSuccess, undefined, reject);
			});
		}

		Promise.all([
			loadFont('/fonts/InputMonoBlackRegular.json', 'InputMonoRegular'),
			loadFont('/fonts/InputMonoCompressedThinRegular.json', 'InputMonoCompressedThinRegular'),
			loadFont('/fonts/InputMonoCondensedExLightRegular.json', 'InputMonoCondensedExLightRegular'),
			loadFont('/fonts/InputMonoCondensedMediumRegular.json', 'InputMonoCondensedMediumRegular'),
			loadFont('/fonts/InputMonoCondensedRegular.json', 'InputMonoCondensedRegular'),
			loadFont('/fonts/InputMonoCondensedThinRegular.json', 'InputMonoCondensedThinRegular'),
			loadFont('/fonts/InputMonoExLightRegular.json', 'InputMonoExLightRegular'),
			loadFont('/fonts/InputMonoLightRegular.json', 'InputMonoLightRegular'),
			loadFont('/fonts/InputMonoMediumRegular.json', 'InputMonoMediumRegular'),
			loadFont('/fonts/InputMonoRegular.json', 'InputMonoRegular'),
			loadFont('/fonts/InputMonoThinRegular.json', 'InputMonoThinRegular')
		]).then(() => {
			const regularFont = fonts['InputMonoRegular'];
			const boldFont = fonts['InputMonoBold'];
		});
	});
</script>

{#if font}
	<T.Mesh>
		<TextGeometry
			args={[
				'Hello World',
				{
					font,
					size: 1,
					height: 0.1,
					bevelEnabled: true,
					bevelThickness: 0.1,
					bevelSize: 0,
					bevelSegments: 0,
					curveSegments: 12
				}
			]}
		/>
		<T.MeshStandardMaterial color="#FD3F00" />
	</T.Mesh>
{/if}
