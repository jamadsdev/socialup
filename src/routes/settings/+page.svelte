<script>
	import CardSettings from '$lib/components/CardSettings.svelte';
	import LayoutContent from '$lib/layouts/LayoutContent.svelte';
    import { getAlertState } from '$lib/states/alert.svelte';

    /** @type {{ data: import('./$types').PageData }} */
    let { data, form} = $props();
    const alertState = getAlertState()

    if (form?.fail) {
        alertState.error(form.message)
    } else if (form?.success) {
        alertState.success(form.message)
    }
</script>

<LayoutContent>
    <div class="flex flex-wrap">
        <div class="w-full px-4">
            {#await data.bluesky then bluesky}
                <CardSettings user={data.user} {bluesky}/>
            {/await}
        </div>
    </div>
</LayoutContent>
