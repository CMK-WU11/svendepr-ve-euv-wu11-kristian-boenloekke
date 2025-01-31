import { ImageResponse } from 'next/og'


const aspectRatios = {
    '1200x630': { width: 1200, height: 630 },
    '1x1': { width: 1080, height: 1080 },
    '4x3': { width: 1024, height: 768 },
    '16x9': { width: 1920, height: 1080 },
}

export async function GET(request) {
    const url = new URL(request.url)
    const aspectRatio = url.pathname.split('/').pop()
    const config = aspectRatios[aspectRatio] || aspectRatios['1200x630']

    return new ImageResponse(
        (
            <div tw='w-full h-full flex flex-col items-center justify-center bg-white'>

                <div tw='w-full h-full bg-[#5E2E53] opacity-70 flex flex-col items-center justify-center'>
                    

                    <p className='text-[#E856EB] px-4' style={{fontSize: '200px', paddingLeft: '2rem'}}>Landrup Dans</p>

                </div>



            </div>
        ),
        {
            width: config.width,
            height: config.height,
        }
    )
}