// src/data/menu.ts
const base = process.env.VITE_BASE || ''

export const headerMenu = [
    { name: 'Theme Info', link: `/${base}/theme-info` },
    { name: 'Our Team', link: `/${base}/team` },
    { name: 'Blog', link: `/${base}/blog` },
    { name: 'Style-Guide', link: `/${base}/style-guide`, showArrow: false,
        children: [
            { name: 'Typography', link: '/style-guide#typography' },
            { name: 'Colors', link: '/style-guide#colors' },
            { name: 'Links', link: '/style-guide#links' },
            { name: 'Buttons', link: '/style-guide#buttons' },
            { name: 'Forms', link: '/style-guide#forms' },
            { name: 'Lists', link: '/style-guide#lists' },
        ]
    }
];

export const footerMenu = [
    { name: 'Style Guide', link: '/style-guide' },
];

export const legalMenu = [
    { name: 'Privacy Policy', link: '/legal/privacy-policy' },
    { name: 'Terms of Service', link: '/legal/terms-of-service' }
];

