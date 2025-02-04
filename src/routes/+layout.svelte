<script>
	import '../app.css';
	import { setAlertState } from '$lib/states/alert.svelte';
	
	import Alerter from '$lib/components/Alerter.svelte';
	import Navbar from '$lib/components/Navbar.svelte';
	import Sidebar from '$lib/components/Sidebar.svelte';

	let { data, children } = $props();

	setAlertState()
</script>

<Alerter />
<Navbar />
<Sidebar pages={data.pages} user={data.user}/>
<div class="relative h-full overflow-y-auto bg-base-100 lg:ml-64">
	{@render children()}
</div>
