<script lang="ts">
	import '../styles/fonts.css';
	import { loadFonts, areFontsLoaded } from '$lib/fontStore';
	import { onMount } from 'svelte';

	onMount(() => {
		loadFonts().then((fonts) => {
			console.log('DONE HERE', fonts);
			areFontsLoaded.set(true);
		});
	});
</script>

<slot></slot>
