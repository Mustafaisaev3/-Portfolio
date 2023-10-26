export interface WorkExamplesInterface {
    id: number,
    title: string,
    technology: string,
    category: string,
    images: string[],
    description: string,
    link: string,
}

export const WorkExamples = [
    {
        id: 1,
        title: 'Nike Shoes ecommerce',
        technology: 'Next13, Sass, Prisma',
        category: 'next',
        images: [
            'https://res.cloudinary.com/dmsxzw5rd/image/upload/v1698231596/nike-shoes-ecommerce/nike-shoes_b0gika.png',
            'https://res.cloudinary.com/dmsxzw5rd/image/upload/v1698231595/nike-shoes-ecommerce/nike-shoes3_os9f8n.png',
            'https://res.cloudinary.com/dmsxzw5rd/image/upload/v1698231595/nike-shoes-ecommerce/nike-shoes2_pasx3y.png'
        ],
        description: 'Agmhgchmgsd sdjfg sjdjhv sdffj,hsa fdjsj hf sj,dfh sdj,fh fjjshdf  hsdjkfh sdyhgflisdfh jsflishdf jkh ',
        link: 'https://shoes-ecommerce-with-next13-sass-redux-toolkit-1ned.vercel.app/products/64f1eedcb4ece7e1175b2b6a',
    },
    {
        id: 2,
        title: 'Pizza POS',
        technology: 'Next.js, Redux, Tailwind',
        category: 'react',
        images: [
            'https://res.cloudinary.com/dmsxzw5rd/image/upload/v1698226443/Pizza%20pos/screencapture-darling-ganache-c3978a-netlify-app-2023-10-25-12_33_35_at4s4e.png',
            'https://res.cloudinary.com/dmsxzw5rd/image/upload/v1698226457/Pizza%20pos/screencapture-darling-ganache-c3978a-netlify-app-2023-10-25-12_27_05_o7tbwu.png',
            'https://res.cloudinary.com/dmsxzw5rd/image/upload/v1698226458/Pizza%20pos/screencapture-darling-ganache-c3978a-netlify-app-2023-10-25-12_27_40_g6qdmr.png',
            'https://res.cloudinary.com/dmsxzw5rd/image/upload/v1698226456/Pizza%20pos/screencapture-darling-ganache-c3978a-netlify-app-2023-10-25-12_27_22_pkk2xa.png',
            'https://res.cloudinary.com/dmsxzw5rd/image/upload/v1698226456/Pizza%20pos/screencapture-darling-ganache-c3978a-netlify-app-user-2023-10-25-12_26_38_s1qblf.png'
        ],
        description: '',
        link: 'https://darling-ganache-c3978a.netlify.app/',
    },
]