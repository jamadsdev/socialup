<script>
    import { getAlertState } from '$lib/states/alert.svelte';
    import Alert from './Alert.svelte'

    const alertState = getAlertState()
</script>


<div class="toast toast-top toast-end pt-20 z-50">
<!-- <div class="absolute z-40 pt-20 right-2 top-2 flex flex-col gap-2"> -->
    {#each alertState.alerts as alert }
        <Alert {alert} />
    {/each}
</div>