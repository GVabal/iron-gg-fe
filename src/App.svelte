<script>
	import { Router, Link, Route } from 'svelte-routing';
	import HelloMaterialUI from './components/HelloMaterialUI.svelte';
	import HelloAxios from './components/HelloAxios.svelte';
	import PlayerSearchPage from './pages/player-search-page/PlayerSearchPage.svelte';

	export let url = '';
</script>

<Router url="{url}">
	<nav>
	  <Link to="/">Search Player</Link> |
	  <Link to="axios">Axios</Link> |
	  <Link to="mui">Material UI</Link>
	</nav>
	<div>
	  <Route path="axios" component="{HelloAxios}" />
	  <Route path="mui" component="{HelloMaterialUI}" />
	  <Route path="/"><PlayerSearchPage /></Route>
	</div>
</Router>