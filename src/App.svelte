<script>
	import { Router, Link, Route } from 'svelte-routing';
	import HelloWorld from './components/HelloWorld.svelte';
	import HelloMaterialUI from './components/HelloMaterialUI.svelte';
	import HelloAxios from './components/HelloAxios.svelte';

	export let url = '';
</script>

<Router url="{url}">
	<nav>
	  <Link to="/">Home</Link> |
	  <Link to="axios">Axios</Link> |
	  <Link to="mui">Material UI</Link>
	</nav>
	<div>
	  <Route path="axios" component="{HelloAxios}" />
	  <Route path="mui" component="{HelloMaterialUI}" />
	  <Route path="/"><HelloWorld /></Route>
	</div>
  </Router>