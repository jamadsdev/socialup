<script>
    /** @type {{ data: import('./$types').LayoutData, children: import('svelte').Snippet }} */
    import LayoutContent from '$lib/layouts/LayoutContent.svelte';
    import HeaderStats from '$lib/components/Headers/HeaderStats.svelte';
    let { data, children } = $props();
</script>

<LayoutContent>
    <!-- <HeaderStats /> -->
    {@render children()}
</LayoutContent>
