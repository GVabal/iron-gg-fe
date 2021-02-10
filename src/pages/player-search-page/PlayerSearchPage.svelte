<script>
    import Button, {Label} from '@smui/button';
    import Textfield from '@smui/textfield';
    import {navigate} from 'svelte-routing';
    import RegionType from './RegionType';
    import RegionButton from './RegionButton.svelte';
    import Api from './SummonerService';

    let username = '';
    let region = RegionType.EUW1;
    let errorMessage = '';

    const findSummoner = async() => {
    try {
        const response = await Api.getSummoner(username, region);
        navigate(`${region}/summoner/${username}`, { response, replace: true });
    } catch (error) {
        errorMessage = 'Summoner not found!';
    }
};
</script>

<div class="container">
    <h1>IRON.GG</h1>

    <div>
        <Textfield 
            variant="outlined" 
            bind:value={username} 
            label="Summoner Name" 
            input$aria-controls="helper-text-outlined-a" 
            input$aria-describedby="helper-text-outlined-a" 
        />

        <RegionButton on:select={(e) => region = e.detail.selectedRegion}/>

        <Button variant="raised" on:click={findSummoner}>
            <Label>Search</Label>
        </Button>
    </div>
    <p>{errorMessage}</p>
</div>

<style>
    h1 {
        font-size: 100px;
        -webkit-user-select: none;  /* Chrome all / Safari all */
        -moz-user-select: none;     /* Firefox all */
        -ms-user-select: none;      /* IE 10+ */
        user-select: none;  
    }

    p {
        color: darkred;
    }

    .container {
        display: grid;
        place-items: center;
        width: 100%;
        height: 100%;
    }
</style>