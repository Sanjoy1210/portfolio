import { AiOutlineHome } from 'react-icons/ai';
import { FaRegUser } from 'react-icons/fa';
import { FiCodesandbox } from 'react-icons/fi';
import { RiContactsBookLine } from 'react-icons/ri';
import { SiBlogger } from 'react-icons/si';
import { TiDocumentText } from 'react-icons/ti';

export const headerMenuData = [
  {
    id: '1',
    href: '/home',
    text: 'Home',
    icon: AiOutlineHome,
  },
  {
    id: '2',
    href: '/about',
    text: 'About',
    icon: FaRegUser,
  },
  {
    id: '3',
    href: '/resume',
    text: 'Resume',
    icon: TiDocumentText,
  },
  {
    id: '4',
    href: '/works',
    text: 'Works',
    icon: FiCodesandbox,
  },
  {
    id: '5',
    href: '/blogs',
    text: 'Blogs',
    icon: SiBlogger,
  },
  {
    id: '6',
    href: '/contact',
    text: 'Contact',
    icon: RiContactsBookLine,
  },
];

// export const footerMenuData = {
//   logoWithSocials: {
//     logo: 'rowely.',
//     subTitle: 'Pre-loved bridal essentials for every celebration',
//     socials: [
//       {
//         icon: <FaTiktok className="text-lg text-[#ABA9A8] md:text-2xl" />,
//         href: 'https://www.tiktok.com/@shoprowely',
//       },
//       // {
//       //   icon: <FaPinterest className="text-xl text-[#ABA9A8] md:text-[28px]" />,
//       //   href: 'https://www.instagram.com/',
//       // },
//       {
//         icon: <FaInstagram className="text-xl text-[#ABA9A8] md:text-[28px]" />,
//         href: 'https://www.instagram.com/shoprowely',
//       },
//     ],
//   },
//   quickLinks: {
//     title: 'Quick Links',
//     links: [
//       {
//         text: 'Wedding Dress',
//         href: '/wedding-dress',
//       },
//       {
//         text: 'Bridal Occasion',
//         href: '/bridal-occasion',
//       },
//       {
//         text: 'Accessories',
//         href: '/accessories',
//       },
//       {
//         text: 'Shoes',
//         href: '/shoe',
//       },
//       {
//         text: 'Contact us',
//         href: '/contact-us',
//       },
//     ],
//   },
//   about: {
//     title: 'About',
//     links: [
//       {
//         text: 'Our Story',
//         href: '/our-story',
//       },
//       {
//         text: 'FAQ',
//         href: '/faq',
//       },
//     ],
//   },
//   policy: {
//     title: 'Policy',
//     links: [
//       // {
//       //   text: 'Shipping & Returns',
//       //   href: '/',
//       // },
//       {
//         text: 'Privacy Policy',
//         href: '/privacy-policy',
//       },
//       {
//         text: 'Terms & Conditions',
//         href: '/terms-conditions',
//       },
//     ],
//   },
// };
