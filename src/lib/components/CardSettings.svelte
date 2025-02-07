<script>
    let { user } = $props()
</script>

<div
  class="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-xl rounded-lg bg-base-300 border-0 pt-4"
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
        
      </div>

      <hr class="mt-6 border-b-1 border-blueGray-300" />

      <h6 class="text-blueGray-400 text-sm mt-3 mb-6 font-bold uppercase">
        Application Keys
      </h6>
      <div class="flex flex-wrap">
        <div class="w-full lg:w-12/12 px-4">
          <div class="relative w-full mb-3">
            <label
              class="block uppercase text-blueGray-600 text-xs font-bold mb-2"
              for="grid-address"
            >
              Bluesky:
            </label>
            <input
              id="grid-address"
              type="text"
              class="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
              value="Bld Mihail Kogalniceanu, nr. 8 Bl 1, Sc 1, Ap 09"
            />
          </div>
        </div>
      </div>
    </form>
  </div>
</div>