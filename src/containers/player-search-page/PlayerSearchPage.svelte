<script>
    import Button, {Group, GroupItem, Label, Icon} from '@smui/button';
    import Menu from '@smui/menu';
    import List, {Item, Text} from '@smui/list';
    import Region from './Region';

    let username = '';
    let menu;
    let selectedRegion = Region.EUW;
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
                <Item on:click={() => selectedRegion = Region.EUW}><Text>{Region.EUW}</Text></Item>
                <Item on:click={() => selectedRegion = Region.USA}><Text>{Region.USA}</Text></Item>
                <Item on:click={() => selectedRegion = Region.WTF}><Text>{Region.WTF}</Text></Item>
            </List>
        </Menu>
    </div>
  </Group>

  <p>{username}</p>

