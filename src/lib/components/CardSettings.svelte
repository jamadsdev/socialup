<script>
  import FormModal from "./Modals/FormModal.svelte";
  let { user, bluesky } = $props()

  let showModal = $state(false);
</script>

<div
  class="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-xl rounded-lg bg-base-300 border-0 pt-4 max-w-3xl"
>
  <div class="rounded-t bg-base-300 mb-0 px-6 py-6">
    <div class="text-center flex justify-between">
      <h6 class="text-base-content text-xl font-bold">My account</h6>
      <button
        class="btn btn-accent btn-sm px-4 py-2 mr-1 ease-linear transition-all duration-150"
        type="button"
      >
        Update
      </button>
    </div>
  </div>
  <div class="flex-auto px-4 lg:px-10 py-10 pt-0">
    <form>
      <h6 class="text-blueGray-400 text-sm mt-3 mb-6 font-bold uppercase">
        User Information
      </h6>
      <div class="flex flex-wrap">
        <div class="w-full lg:w-6/12 px-4">
          <div class="relative w-full mb-3">
            <div class="label">
                <span class="label-text font-bold uppercase text-xs">First Name</span>
            </div>
            <input type="text" name="firstName" id="firstName" class="input input-bordered w-full max-w-xs" value={user.firstName} />
          </div>
        </div>
        <div class="w-full lg:w-6/12 px-4">
          <div class="relative w-full mb-3">
            <div class="label">
                <span class="label-text font-bold uppercase text-xs">Last Name</span>
            </div>
            <input type="text" name="lastName" id="lastName" class="input input-bordered w-full max-w-xs" value={user.lastName}/>
          </div>
        </div>
        <div class="w-full lg:w-12/12 px-4">
          <div class="relative w-full mb-3">
            <div class="label">
                <span class="label-text font-bold uppercase text-xs">Email Address</span>
            </div>
            <input type="text" name="email" id="email" class="input input-bordered w-full" value={user.email}/>
          </div>
        </div>
      </div>

      <hr class="mt-6 border-b-1 border-blueGray-300" />

      <h6 class="text-blueGray-400 text-sm mt-3 mb-6 font-bold uppercase">
        Bluesky API Keys
      </h6>
      <div class="flex flex-wrap">
        <div class="w-6/12 px-4">
          <div class="relative w-full mb-3">
            <label
              class="block uppercase text-xs font-bold mb-2"
              for="grid-address"
            >
              Account:
            </label>
              {#each bluesky.items as account }
                <input type="text" name={account.id} id={account.id} disabled class="input input-ghost focus:border-0 w-full mb-3" value={account.accountName} />
              {/each}            
          </div>
        </div>
        <div class="w-6/12 px-4">
          <div class="relative w-full mb-3">
            <label
              class="block uppercase text-xs font-bold mb-2"
              for="grid-address"
            >
              API Key:
            </label>
            {#each bluesky.items as key}
             <input type="password" name="blueskyKey" id="blueskyKey" disabled class="input input-bordered w-full mb-3" value={key.key} /> 
            {/each}
          </div>
        </div>
      </div>
    </form>
    <div>
      <button 
        onclick={() => (showModal = true)}
        class="btn btn-success btn-sm">Add Bluesky API Key</button>
    </div> 
  </div>
</div>

<FormModal bind:showModal formAction="/settings?/addKey" btnText="Submit">
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