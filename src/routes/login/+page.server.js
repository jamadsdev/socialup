import { fail, redirect } from "@sveltejs/kit";

/** @satisfies {import('./$types').Actions} */
export const actions = {
    register: async ({ locals, request }) => {
        console.log('Entering Register Action...')
        const body = await request.formData();
        const email = body.get('email');
        const password = body.get('password');

        if (!email || !password) {
            return fail(400, {emailRequired: body.mail === null, passwordRequired: body.password === null });
        }

        const data = {
            "password": password,
            "passwordConfirm": password,
            "email": email,
            "emailVisibility": true
        }

        try {
            await locals.pb.collection('socialup_users').create(data);
            await locals.pb.collection('socialup_users').authWithPassword(data.email, data.password);
        } catch (error) {
            return fail(500, {fail: true, message: error.data.message})
        }

        throw redirect(303, '/docs/gettingstarted')
    },
    login: async ({ request, locals, url }) => {
        const body = await request.formData();
        const email = body.get('email');
        const password = body.get('password');

        let location = '/';
        const ref = url.searchParams.get('ref')

        if (ref) {
            location = `/${ref.slice(1)}`
        }

        if (!email || !password) {
            return fail(400, {fail: true, emailRequired: email === null, passwordRequired: password === null });
        }

        try {
            await locals.pb.collection('socialup_users').authWithPassword(email, password)
        // eslint-disable-next-line no-unused-vars
        } catch (error) {
            return fail(500, {fail: true, message: "Invalid email and/or password"})
        }

        throw redirect(303, location)
    }
}