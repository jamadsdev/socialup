<script>
    import SidebarMenuItem from '$lib/components/SidebarMenuItem.svelte'
    let { name = null, href = null, icon = null, tags= null, items = null, collapsible = null } = $props()

    const sanitize = (name) => {
        return name.toLowerCase().replace(/\W/g, "-")
    }
</script>

{#if name}
    <li>
        {#if items}
            {#if collapsible}
                <details open>
                    <summary>
                        {#if icon}
                            <span>{@html icon}</span>
                        {/if}
                        {name}
                    </summary>
                    <ul>
                        {#each items as { name, href, icon, items } }
                            <SidebarMenuItem
                                {name}
                                {href}
                                {icon}
                                {items} />
                        {/each}
                    </ul>
                </details>
            {:else}
                {#if !href}
                    <h2 class="menu-title flex items-center gap-4 px-1.5">
                        {#if icon}
                            <span class="text-base-content">{@html icon}</span>
                        {/if}
                        {name}
                    </h2>
                {/if}
                {#if items}
                    <ul>
                        {#each items as { name, href, icon, tags, items } }
                            <SidebarMenuItem
                                {name}
                                {href}
                                {icon}
                                {tags}
                                {items} />
                        {/each}
                    </ul>
                {/if}
            {/if}
        {/if}
        {#if !items && href}
            {#if tags === 'locked' && !userState.loggedin}
                <span class="text-base-content hover:bg-transparent hover:cursor-not-allowed">{name} {@html icon}</span>                
            {:else}
                <a {href} >
                    {name}
                    {#if icon && tags !== 'locked'}
                        <span>{@html icon}</span>
                    {/if}
                </a>
            {/if}
        {/if}
    </li>
    {:else if !items}
        <li></li>
{/if}
