<script>
	import { enhance } from "$app/forms";
  import FormModal from "./Modals/FormModal.svelte";
  let { user, bluesky=null } = $props()

  let showAddModal = $state(false);
  let showDelModal = $state(false);


</script>

<div class="relative mb-6 flex w-full min-w-0 max-w-3xl flex-col rounded-lg border-0 bg-base-300 pt-4 shadow-xl">
  <div class="mb-0 rounded-t p-6">
    <div class="flex justify-between text-center">
      <h6 class="text-xl font-bold text-base-content">Account Information</h6>
      <button class="btn btn-primary btn-sm">Update</button>
    </div>
  </div>
  <div class="flex-auto px-4 py-10 pt-0">
    <h6 class="mb-6 mt-3 text-sm font-bold uppercase">User Information</h6>
    <div class="flex flex-wrap">
      <div class="w-full px-4 md:w-1/2">
        <div class="relative mb-3 w-full">
          <div class="label">
            <span class="label-text text-xs font-bold uppercase">First Name</span>
          </div>
          <input type="text" class="input input-bordered w-full max-w-xs" name="firstName" id="firstName" value={user.firstName} />
        </div>
      </div>
      <div class="w-full px-4 md:w-1/2">
        <div class="relative mb-3 w-full">
          <div class="label">
            <span class="label-text text-xs font-bold uppercase">Last Name</span>
          </div>
          <input type="text" class="input input-bordered w-full max-w-xs" name="lastName" id="lastName" value={user.lastName} />
        </div>
      </div>
      <div class="w-full px-4">
        <div class="relative mb-3 w-full">
          <div class="label">
            <span class="label-text text-xs font-bold uppercase">Email</span>
          </div>
          <input type="text" class="input input-bordered w-full max-w-xs" name="email" id="email" value={user.email} />
        </div>
      </div>
    </div>
    <hr class="border-b-1 mt-6 border-black" />
    <!-- Bluesky Keys -->
    <h6 class="mb-6 mt-3 text-sm font-bold uppercase">Bluesky Authorizations</h6>
    <div class="flex flex-wrap px-4 justify-between">
      {#each bluesky.items as account }
      <div class="w-full md:w-1/3">
        <div class="relative mb-3 w-full">
           <h6 class="text-md font-semibold">{account.accountName}</h6>
        </div>
      </div>
      <div class="w-full md:w-1/3">
        <div class="relative mb-3 w-full">
          <input class="input input-bordered input-sm w-full" disabled type="password" name="accountKey" value={account.key}>
        </div>
      </div>
      <div class="w-full md:w-1/4">
        <div class="relative mb-3 w-full">
          <form action="/settings?/delKey" method="post">
            <input type="text" name="id" id="id" hidden value={account.id}>
            <button type="submit" class="btn btn-outline btn-error btn-xs">Remove</button>
          </form>
          
        </div>
      </div>
      {/each}
    </div>
      <div class="mb-4 w-full px-4 md:w-1/4">
        <button 
          onclick={() => (showAddModal = true)}
          class="btn btn-success btn-md">Add Account</button>
      </div>
  </div>
</div>

<FormModal bind:showModal={showAddModal} formAction="/settings?/addKey" btnText="Submit">
  {#snippet header()}
    <h2 class="text-xl font-semibold">Add Bluesky API Key</h2>
  {/snippet}
  <div class="p-5">
      <input 
        type="text" 
        class="input input-bordered input-md"
        name="accountName" 
        id="accountName" 
        placeholder="user.bsky.social"/>
      <input 
        type="text" 
        class="input input-bordered input-md"
        name="apiKey" 
        id="apiKey" 
        placeholder="API Key"/>
  </div>
</FormModal>