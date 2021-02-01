<script>
    import { onMount } from 'svelte';
    import axios from 'axios';

    const BASE_URL = 'http://dummy.restapiexample.com/api/v1';
    let employees = [];

    onMount(async () => {
        getTodos();
	});

    const getTodos = async () => {
        try {
            const res = await axios.get(`${BASE_URL}/employees`);
            employees = res.data;
            employees = employees.data;

            return employees;
        } catch (e) {
            console.error(e);
        }
    };
</script>

<h1>Employees List</h1>
<ul>
    {#each employees as emp}
        <li>{emp.id} | {emp.employee_name}</li>
    {:else}
        <p>Fetching data...</p>
    {/each}
</ul>