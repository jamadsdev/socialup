/** @type {import('./$types').PageServerLoad} */

export function load({locals}){
    if(locals.pb.authStore.baseToken) locals.pb.authStore.clear();
}