<script lang="ts">
	import { getName } from '$/api'
	let userPromise: Promise<string> = getName()
</script>

{#await userPromise}
	<p>...waiting</p>
{:then name}
<h1>Welcome to SvelteKit {name}</h1>
{:catch error}
	<p style="color: red">{error.message}</p>
{/await}

<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentations</p>
