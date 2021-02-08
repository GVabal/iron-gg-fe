<script>
    import Button, {Label} from '@smui/button';
    import Textfield from '@smui/textfield';    
    import RegionType from './RegionType';
    import RegionButton from './RegionButton.svelte';

    let username = '';
    let region = RegionType.EUW1;
    $: errorMessage = 'a';

    function findSummoner() {
        console.log('https://dev.to/lukocastillo/svelte-3-how-to-connect-your-app-with-a-rest-api-axios-2h4e');
    }

</script>

<h1>IRON.GG</h1>

<div style="border: 1px solid black">
    <Textfield 
        variant="outlined" 
        bind:value={username} 
        label="Username" 
        input$aria-controls="helper-text-outlined-a" 
        input$aria-describedby="helper-text-outlined-a" 
    />

    <RegionButton on:select={(e) => region = e.detail.selectedRegion}/>

    <Button variant="raised" on:click={findSummoner}>
        <Label>Search</Label>
    </Button>

    <p>{errorMessage}</p>
</div>

<style>

</style>