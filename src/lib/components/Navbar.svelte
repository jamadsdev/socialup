<script>
    import Icon from "./Icon.svelte";
    import { enhance } from "$app/forms";

    let data = $props()
</script>

<nav class="fixed z-30 w-full bg-base-100 border-b-2 border-base-300">
    <div class="flex flex-wrap items-center justify-between mx-auto p-4">
        <a href="/" class="flex items-center space-x-3">
            <Icon name='upload-cloud' width="2em" height="2em" />
            <span class="self-center text-2xl font-semibold whitespace-nowrap">
                SocialUp...but Later 
            </span>
        </a>
        <div class="flex items-center">
            <div class="ms-3 flex items-center gap-2">
                <div class="text-lg font-semibold">
                    User Info
                </div>
                <div>
                    <!-- {#if !user}
                        <a href="/login">
                            <button class="btn btn-primary btn-md">Login</button>
                        </a>
                    {:else}
                        <form action="/logout" method="post">
                            <button class="btn btn-secondary btn-md">Logout</button>
                        </form>
                    {/if} -->
                </div>
            </div>
        </div>
    </div>
</nav>