import {
    Facebook as FacebookIcon,
    Twitter as TwitterIcon,
    Instagram as InstagramIcon,
    YouTube as YoutubeIcon,
    Email as EmailIcon
} from '@mui/icons-material';

const Links = [
    {
        path: '/inventory',
        name: 'Inventory'
    },
    {
        path: '/shop',
        name: 'Shop'
    },
    {
        path: '/transaction-history',
        name: 'Transaction History'
    },
]

const SubLinks = [
    // {
    //     path: '/seller-guide',
    //     name: 'Seller Guide',
    //     parentName: 'Guides',
    // },
    // {
    //     path: '/buyer-guide',
    //     name: 'Buyer Guide',
    //     parentName: 'Guides',
    // },
]

const SocialMediaLinks = [
    {
        url: 'https://www.facebook.com/',
        name: 'Facebook',
        icon: FacebookIcon
    },
    {
        url: 'https://www.instagram.com',
        name: 'Instagram',
        icon: InstagramIcon
    },
    {
        url: 'https://www.twitter.com',
        name: 'Twitter',
        icon: TwitterIcon
    },
    {
        url: 'https://www.gmail.com',
        name: 'Gmail',
        icon: EmailIcon
    },
    {
        url: 'https://www.youtube.com',
        name: 'Youtube',
        icon: YoutubeIcon
    },
]


export {
    Links,
    SubLinks,
    SocialMediaLinks
};