<script>
	import CardSettings from '$lib/components/CardSettings.svelte';
	import LayoutContent from '$lib/layouts/LayoutContent.svelte';

    /** @type {{ data: import('./$types').PageData }} */
    let { data } = $props();
</script>

<LayoutContent>
    <div class="flex flex-wrap">
        <div class="w-full lg:w-8/12 px-4">
            <CardSettings user={data.user} />
        </div>
    </div>
</LayoutContent>
