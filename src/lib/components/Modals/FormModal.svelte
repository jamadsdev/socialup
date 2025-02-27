<script>
	import { enhance } from "$app/forms";
    let { btnText, formAction, showModal = $bindable(), header, children } = $props();

    let dialog = $state();

    $effect(() => {
        if (showModal) dialog.showModal();
    });
</script>

<!-- svelte-ignore a11y_click_events_have_key_events -->
<!-- svelte-ignore a11y_no_noninteractive_element_interactions -->
<dialog
    class="modal"
    bind:this={dialog}
    onclose={() => (showModal = false)}
    onclick={(e) => { if (e.target === dialog) dialog.close(); }}
>
    <div class="modal-box">
        <div class="text-lg font-bold">{@render header?.()}</div>
		<form action={formAction} method="POST">
			{@render children?.()}
			<!-- svelte-ignore a11y_autofocus -->
			<div class="modal-action">
				<!-- <button type="button" class="btn btn-error btn-sm" onclick={() => dialog.close()}>Cancel</button> -->
				<button type="submit" class="btn btn-success btn-sm" autofocus onclick={() => dialog.close()}>{btnText}</button>
			</div>
		</form>
    </div>
</dialog>