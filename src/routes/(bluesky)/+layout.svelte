<script>
    /** @type {{ data: import('./$types').LayoutData, children: import('svelte').Snippet }} */
    import LayoutContent from '$lib/layouts/LayoutContent.svelte';
    
    let { data, children } = $props();
</script>

<LayoutContent>
    {@render children()}
</LayoutContent>
