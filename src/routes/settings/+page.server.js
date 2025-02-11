import { fail } from '@sveltejs/kit';

/** @type {import('./$types').PageServerLoad} */
export async function load({locals}) {
    // Query for User authorizations
    const getAppKeys = async (service) => {
        try {
            const result = await locals.pb.collection('socialup_keys').getList(1,5,{
                filter: `service = "${service}"`,
                sort: '-created'
            });
            return result
        // eslint-disable-next-line no-unused-vars
        } catch (error) {
            return { 
                status: 'error',
                message: 'Error getting keys'
            };
        }
    }    
    return {
        user: locals.user,
        bluesky: await getAppKeys('bluesky')
    };
};

export const actions = {
    addKey: async ({ locals, request }) => {
        console.log('Entering Add Key Action...')
        const data = await request.formData();
        const key = data.get('apiKey');
        const accountName = data.get('accountName');

        if (!key || !accountName) {
            return fail(400, {fail: true, message: "Account name and key are required"})
        }

        try {
            await locals.pb.collection('socialup_keys').create({
                userId: locals.user.id,
                accountName,
                key,
                service: "bluesky"
            })
        } catch (error) {
            return fail(500, {fail: true, message: error.data.message})
        }

        return {success: true, message: "API key successfully added"}
    }
}