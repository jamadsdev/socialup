<script>
    import SidebarMenuItem from "./SidebarMenuItem.svelte";
    import Icon from "./Icon.svelte";
    
    let {pages, user} = $props()
  </script>
  
  <aside class="fixed top-0 left-0 z-20 flex-col flex-shrink-0 hidden w-64 h-full pt-16 font-normal duration-75 lg:flex transition-width">
    <div class="relative flex flex-col flex-1 min-h-0 pt-0 bg-base-100 border-r border-base-300">
      <div class="flex-flex-col flex-1 pt-5 pb-4 overflow-y-auto">
        <div class="flex-1 px-3 space-y-1 bg-base-100">
          <ul class="menu rounded-box">
            {#each pages as { name, href, icon, items, tags, collapsible}}
              <SidebarMenuItem
                {name}
                {href}
                {icon}
                {tags}
                {items}
                {collapsible} 
              />
            {/each}
            </ul>
        </div>
      </div>
       <div class="px-2">
      {#if user}
        <a href="/settings">
          <button class="btn btn-ghost justify-start font-semibold text-xl w-full">
            <Icon name="settings" />Settings
          </button>
        </a>
       <!-- {:else}
        <a href="/register">
          <button class="btn btn-accent btn-md w-full">Sign Up</button>
        </a>  -->
      {/if}
    </div>
      <div class="px-2 py-4">
        {#if !user}
          <a href="/login">
            <button class="btn btn-primary btn-md w-full">Login</button>
          </a>
        {:else}
        <a href="/logout">
          <button class="btn btn-secondary btn-md w-full">Logout</button>
        </a>
        {/if}
      </div>
    </div>
  </aside>