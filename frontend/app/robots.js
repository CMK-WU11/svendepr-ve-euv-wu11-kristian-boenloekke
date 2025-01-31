export default function robots() {
    return {
        rules: [
            {
                userAgent: '*',
                allow: '/',
            },
        ],
        sitemap: 'https://kb-landrup-dans-api.onrender.com/sitemap.xml',
        host: 'https://kb-landrup-dans-api.onrender.com',
    }
}