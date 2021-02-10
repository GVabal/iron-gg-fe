<script>
    import Button, {Group, GroupItem, Label, Icon} from '@smui/button';
    import Menu from '@smui/menu';
    import List, {Item, Text} from '@smui/list';
    import { createEventDispatcher } from 'svelte';
    import RegionType from './RegionType';

    const dispatch = createEventDispatcher();

    let menu;
    let selectedRegion = RegionType.EUW1;

    function sendMessage() {
        dispatch('select', {
            selectedRegion
        });
    }
</script>

<Group variant="raised">
    <div use:GroupItem>
        <Button variant="raised" on:click={() => menu.setOpen(true)}>
            <Label>
                {selectedRegion}<Icon class="material-icons">arrow_drop_down</Icon>
            </Label>
        </Button>
        <Menu bind:this={menu}>
            <List>
                {#each Object.keys(RegionType) as r}
                    <Item on:click={() => {selectedRegion = r; sendMessage();}}><Text>{r}</Text></Item>
                {/each}
            </List>
        </Menu>
    </div>
</Group>