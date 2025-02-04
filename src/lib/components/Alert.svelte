<script>
    import { getAlertState } from "$lib/states/alert.svelte";

    let { alert } = $props()
    const alertState = getAlertState()

</script>

{#if alert.type === 'success'}
	<div class="alert alert-success">
		<span>{@html alert.message}</span>
	</div>
{:else if alert.type === 'warning'}
	<div class="alert alert-warning">
		<span>{@html alert.message}</span>
	</div>
{:else if alert.type === 'error'}
	<div class="alert alert-error">
		<span>{@html alert.message}</span>
	</div>
{:else}
	<div class="alert alert-info">
		<span>{@html alert.message}</span>
	</div>
{/if}