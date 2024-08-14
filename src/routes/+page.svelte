<script lang="ts">
	import App from '$lib/components/App.svelte';
</script>

<div>
	<App />
</div>

<style>
	:root {
		--grayScale10: #1a1a1a;
		--grayScale9: #282a2b;
		--grayScale8: #343536;
		--grayScale7: #3e4042;
		--grayScale6: #54585a;
		--grayScale5: #868a8c;
		--grayScale4: #b0b3b5;
		--grayScale3: #c7c9ca;
		--grayScale2: #dfe2e4;
		--grayScale1: #f8f9fa;
		--grayScale0: #ffffff;

		--white: var(--grayScale0);
		--black: var(--grayScale10);

		--earthScale0: #f9e6cf;
		--earthScale1: #f1dbb1;
		--earthScale2: #eec99f;
		--earthScale3: #e1a17e;
		--earthScale4: #cc9562;
		--earthScale5: #ab7b49;
		--earthScale6: #9a643a;
		--earthScale7: #86482f;
		--earthScale8: #783a29;
		--earthScale9: #6a3328;
		--earthScale10: #541d29;
		--earthScale11: #42192c;

		--green10: #253823;
		--greenX: #33984b;
		--greenY: #47c468;
		--green5: #5ac54f;
		--green5: #6ed462;
		--greenGradient: linear-gradient(180deg, var(--greenA) 0%, var(--greenB) 100%);
		--lime4: #a3f847;
		--lime5: #c9ff43;
		--yellow4: #eaff3f;
		--yellow5: #ffff3b;
	}

	:global(body) {
		margin: 0;
		overflow: hidden;
	}

	div {
		width: 100vw;
		height: 100vh;
		background: rgb(13, 19, 32);
		background: linear-gradient(180deg, rgba(13, 19, 32, 1) 0%, rgba(8, 12, 21, 1) 100%);
	}
</style>
