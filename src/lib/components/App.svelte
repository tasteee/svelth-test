<script lang="ts">
	import { Canvas } from '@threlte/core';
	import { T } from '@threlte/core';
	import { AxesHelper } from 'three';

	// const headers = {
	// 	'Content-Type': 'application/json',
	// 	// Ensure all keys and values are strings
	// 	'Custom-Header': String(yourSymbolValue) // Convert symbol to string if necessary
	// };

	// const request = new Request(url, {
	// 	method: 'GET',
	// 	headers: headers
	// 	// other options
	// });

	import Scene from './Scene.svelte';
	import { ContactShadows, Sky } from '@threlte/extras';
</script>

<Canvas>
	<Scene></Scene>
	<Sky elevation={0.5} />
	<ContactShadows opacity={0.02} scale={6} blur={16} far={22} resolution={24} color="#000000" />
</Canvas>
