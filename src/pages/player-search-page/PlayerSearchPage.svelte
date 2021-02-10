<script>
    import Button, {Label} from '@smui/button';
    import Textfield from '@smui/textfield';    
    import RegionType from './RegionType';
    import RegionButton from './RegionButton.svelte';
    import Api from './SummonerService';

    let username = '';
    let region = RegionType.EUW1;
    $: errorMessage = 'a';

    const findSummoner = async() => {
    try {
        const response = await Api.getSummoner(username);
        console.log(response);
        return response;
    } catch (error) {
        console.error(error);
    }
};

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