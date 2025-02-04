<script>
	import { browser } from '$app/environment';
	import { goto } from '$app/navigation';

    /** @type {{ data: import('./$types').PageData }} */
    let { data } = $props();

    if (browser) {
        goto('/', {
            invalidateAll: true
        })
    }
</script>