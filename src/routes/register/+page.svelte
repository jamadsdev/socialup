<script>
    /** @type {{ data: import('./$types').PageData }} */
    import LayoutContent from '$lib/layouts/LayoutContent.svelte';
    import { getAlertState } from '$lib/states/alert.svelte';


    let { data, form } = $props();
    const alertState = getAlertState();

    if (form?.fail) {
        alertState.error(form.message)
    }
</script>

<LayoutContent>
    <div class="flex flex-col justify-center sm:mx-auto sm:w-full sm:max-w-sm">
        <form action="/register?/register" method="post">
            <div class="grid grid-rows-4">
                <label class="input input-bordered flex items-center gap-2">
                Email
                <input type="text" id="email" name="email" class="input grow focus:border-0" placeholder="iro@keywork.com" />
                </label>
                <label class="input input-bordered flex items-center gap-2">
                Password
                <input type="password" id="password" name="password" class="input grow focus:border-0" />
                </label>
                <label class="input input-bordered flex items-center gap-2">
                Confirm
                <input type="password" id="passwordVerify" name="passwordVerify" class="input grow focus:border-0" />
                </label>
                <button class="btn btn-accent w-full mt-4" type="submit">Register</button>
            </div>
        </form>
    </div>
</LayoutContent>