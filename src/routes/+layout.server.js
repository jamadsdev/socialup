/** @type {import('./$types').LayoutLoad} */
import { pages, pagesSansSidebar } from '$lib/data/pages';

export async function load({locals}) {
    return {
        pages, 
        pagesSansSidebar,
        user: locals.user
    };
}