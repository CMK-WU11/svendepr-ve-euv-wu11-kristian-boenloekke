export default async function sitemap() {
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL

    const activities = await fetch(`${baseUrl}/api/v1/activities`).then(r => r.json())

    const activityUrls = activities.map((activity) =>  ({
        url: `https://kb-landrup-dans-api.onrender.com/${activity.id}`,
        lastModified: new Date(),
    }))

    return [
        {
            url: 'https://kb-landrup-dans-api.onrender.com',
            lastModified: new Date(),
        },
        {
            url: 'https://kb-landrup-dans-api.onrender.com/search',
            lastModified: new Date(),
        },
        {
            url: 'https://kb-landrup-dans-api.onrender.com/calendar',
            lastModified: new Date(),
        },
        {
            url: 'https://kb-landrup-dans-api.onrender.com/login',
            lastModified: new Date(),
        },
        {
            url: 'https://kb-landrup-dans-api.onrender.com/register',
            lastModified: new Date(),
        },
        ...activityUrls,

    ]
}