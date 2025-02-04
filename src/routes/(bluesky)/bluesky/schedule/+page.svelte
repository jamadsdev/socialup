<script>
    /** @type {{ data: import('./$types').PageData }} */

    let { data } = $props();
    let chars = $state('')
    let totalChars = $derived.by(() => {
        let totalChars = chars.length
        return totalChars;
    })
    let charPercent = $derived.by(() => {
        let charPercent = totalChars/300 * 100;
        return charPercent;
    })

    const today = new Date(new Date().toString().split('GMT')[0]+' UTC').toISOString().split('.')[0];
    let selectedDate = $state()

    

</script>

<div class="pt-4">
    <div class="grid grid-rows-2">
        <div class="flex text-3xl">Bluesky :: Post Scheduling</div>
    </div>


    <div class="grid grid-cols-2">
        <section>
            <!-- Post Creation Section -->
            Post Creation
            <div class="grid grid-cols-2 gap-2 w-48">
                <div>
                    {totalChars}/300
                </div>
                <div>
                    <progress class="progress progress-primary w-56" value="{charPercent.toFixed(0)}" max="100"></progress>
                </div>
            </div>
            <div class="pt-2 pb-5">
                <textarea class="text-white bg-base-200 focus:border-secondary rounded-lg border-4 border-secondary" placeholder="New Post" id="newPost" name="newPost" maxlength="300" cols="40" rows="10" bind:value={chars}></textarea>
            </div>
            <div>
                <input
                    type="file"
                    class="file-input file-input-bordered file-input-primary w-full max-w-xs border-4" />
            </div>
            <div class="pt-5">
                <input class="bg-base-200 border-4 border-primary rounded-lg" type="datetime-local" min={today} bind:value={selectedDate}/>
            </div>
        </section>
        <section>
            <!-- Post Preview Section -->
             Post Preview
             <div class="pt-8">
                <!-- <textarea class="text-white bg-base-200 focus:border-secondary rounded-lg border-4 border-secondary" disabled id="newPost" wrap="hard" name="newPost" maxlength="300" cols="40" bind:value={chars}></textarea> -->
                <div class="card bg-base-100 w-96 shadow-xl card-bordered">
                    <div class="card-body">
                      <p>{chars}</p>
                    </div>
                    <figure>
                      <img
                        src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                        alt="Shoes" />
                    </figure>
                  </div>
             </div>
             <div>
                Set to Post at: {selectedDate}
             </div>
        </section>
    </div>
</div>