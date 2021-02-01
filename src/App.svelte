<script>
	import HelloWorld from './components/HelloWorld.svelte';
	import HelloMaterialUI from './components/HelloMaterialUI.svelte';
	import HelloAxios from './components/HelloAxios.svelte';
</script>

<style>
	.bordered {
		border: 1px solid black;
	}
</style>

<div class="bordered"><HelloWorld /></div>
<div class="bordered"><HelloMaterialUI /></div>
<div class="bordered"><HelloAxios /></div>
