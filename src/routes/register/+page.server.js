/** @type {import('./$types').PageServerLoad} */
import { fail, redirect } from "@sveltejs/kit";

export async function load() {
    return {};
};

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
            console.log('Entering try block...')
            await locals.pb.collection('socialup_users').create(data);
            await locals.pb.collection('socialup_users').authWithPassword(data.email, data.password);
        } catch (error) {
            return fail(500, {fail: true, message: error.data.message})
        }

        throw redirect(303, '/docs/gettingstarted')
    }
}