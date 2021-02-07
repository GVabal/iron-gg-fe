<script>
	import { Router, Link, Route, link } from 'svelte-routing';
	import HelloWorld from './components/HelloWorld.svelte';
	import HelloMaterialUI from './components/HelloMaterialUI.svelte';
	import HelloAxios from './components/HelloAxios.svelte';
	import Header from './feat/header/header.svelte';

	export let url = 'localhost:5000';
</script>

<Router url="{url}">
	<Header />
</Router>
