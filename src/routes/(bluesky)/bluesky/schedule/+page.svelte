<script>
    /** @type {{ data: import('./$types').PageData }} */
    import { bskAgent } from '$lib/api/bluesky';
    import Icon from '$lib/components/Icon.svelte';

    let { data } = $props();

    let showImage = $state(false);
    let chars = $state('')
    let placeholder = $state('');
    let container;
    let image = $state('');
    let input = $state('');

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

    function onChange() {
        const file = input.files[0];
            
        if (file) {
            showImage = true;

            const reader = new FileReader();
            reader.addEventListener("load", function () {
                image.setAttribute("src", reader.result);
            });
            reader.readAsDataURL(file);        
            return;
        } 
        showImage = false; 
    }
</script>

<div class="pt-4">
    <div class="grid grid-rows-2">
        <div class="flex text-3xl">Bluesky :: Post Scheduling</div>
    </div>


    <div class="grid grid-cols-2">
        <section>
            <!-- Post Creation Section -->
            <div class="grid grid-cols-2 gap-2 w-48">
                <div>
                    {totalChars}/300
                </div>
                <div>
                    <progress class="progress progress-primary w-56" value="{charPercent.toFixed(0)}" max="100"></progress>
                </div>
            </div>
            <div class="pt-2 pb-5">
                <textarea class="text-white bg-base-200 focus:border-secondary rounded-lg border-4 border-secondary" placeholder="New Post" id="newPost" name="newPost" maxlength="300" cols="37" rows="10" bind:value={chars}></textarea>
            </div>
            <div>
                <input
                    bind:this={input}
                    onchange={onChange}
                    type="file"
                    class="file-input file-input-bordered file-input-primary w-96 border-4" />
            </div>
            <div class="pt-5">
                <input class="bg-base-200 border-4 border-primary w-96 rounded-lg" type="datetime-local" min={today} bind:value={selectedDate}/>
            </div>
        </section>
        <section>
            <!-- Post Preview Section -->
             <div class="pt-8">
                <!-- <textarea class="text-white bg-base-200 focus:border-secondary rounded-lg border-4 border-secondary" disabled id="newPost" wrap="hard" name="newPost" maxlength="300" cols="40" bind:value={chars}></textarea> -->
                <div class="card card-compact bg-base-300 w-96 shadow-xl">
                    <div class="card-body">
                        <!-- <h2 class="card-title">New Post!</h2> -->
                        <p>{chars}</p>
                    </div>
                    <figure class="min-h-36">
                        {#if showImage}
                            <img
                                src=""
                                bind:this={image}
                                alt="Preview"
                            />    
                        {:else}
                            <span bind:this={placeholder}>Post Preview</span>
                        {/if}
                        
                        </figure>
                  </div>
             </div>
             <div class="pt-4">
                <Icon name="clock" height="1.5em" width="1.5em"/> 
                {selectedDate}
             </div>
        </section>
    </div>
</div>