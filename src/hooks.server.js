import { PB } from "$lib/db/db.server";
import { SITE_ENV } from "$env/static/private";
import { sequence } from "@sveltejs/kit/hooks";
import { redirect } from "@sveltejs/kit";

export const authentication = async ({ event, resolve }) => {
    event.locals.pb = PB;

    const cookie = event.request.headers.get('cookie');
    event.locals.pb.authStore.loadFromCookie(cookie || '');

    try {
        event.locals.pb.authStore.isValid && (await event.locals.pb.collection('socialup_users').authRefresh());
        event.locals.user = event.locals.pb.authStore.model
    // eslint-disable-next-line no-unused-vars
    } catch (_) {
        event.locals.pb.authStore.clear()
    }

    
    const response = await resolve(event);

    response.headers.set(
        'set-cookie',
        event.locals.pb.authStore.exportToCookie({
            httpOnly: false,
            secure: SITE_ENV === 'production',
            sameSite: 'lax',
            path: '/',
            maxAge: 60 * 60 * 6
        })
    );

    return response;
}

const unprotectedPrefix = ['/login','/docs','/register']
export const authorization = async ({ event, resolve }) => {
    // Protect any routes under /authenticated
    if (!unprotectedPrefix.some((path) => event.url.pathname.startsWith(path)) && event.url.pathname !== '/') {
        const loggedIn = await event.locals.pb.authStore.baseToken;

        if (!loggedIn) {
            throw redirect(303, '/login');
        }
    }

    // If the request is still here, just proceed as normally
    const result = await resolve(event);
    return result;
};

export const handle = sequence(authentication, authorization);