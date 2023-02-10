import { FaAward, FaGraduationCap } from 'react-icons/fa';
import { SlBriefcase } from 'react-icons/sl';

export const resumeData = {
  education: {
    id: 'education',
    label: 'Education',
    Icon: FaGraduationCap,
    graduationsData: [
      {
        id: 'phd-in-horriblensess',
        label: 'Ph.D in Horriblensess',
        duration: '2021 - 2023',
        from: 'ABC University',
        address: 'Los Angeles, CA',
        bgColor: 'bg-[#FFF4F4] border-[#FFF4F4]',
      },
      {
        id: 'sr-software-tester',
        label: 'Sr. Software Tester',
        duration: '2019 - Present',
        from: 'Google Inc.',
        address: 'Los Angeles, CA',
        bgColor: 'bg-[#FFF0F8] border-[#FFF0F8]',
      },
      {
        id: 'best-developer',
        label: 'Best Developer',
        duration: '2021',
        from: 'University Of Melbourne',
        address: 'NA',
        bgColor: 'bg-[#FFF4F4] border-[#FFF4F4]',
      },
    ],
  },
  experience: {
    id: 'experience',
    label: 'Experience',
    Icon: SlBriefcase,
    experiencesData: [
      {
        id: 'computer-science',
        label: 'Computer Science',
        duration: '2017 - 2021',
        from: 'Imperialize Technical Institute',
        address: '',
        bgColor: 'bg-[#F3FAFF] border-[#F3FAFF]',
      },
      {
        id: 'cr-web-developer',
        label: 'Cr. Web Developer',
        duration: '2015 - 2017',
        from: 'ib-themes ltd.',
        address: 'Los Angeles, CA',
        bgColor: 'bg-[#FCF4FF] border-[#FCF4FF]',
      },
      {
        id: 'best-writter',
        label: 'Best Writter',
        duration: '2021',
        from: 'Online Typodev Soluation Ltd.',
        address: 'NA',
        bgColor: 'bg-[#F3FAFF] border-[#F3FAFF]',
      },
    ],
  },
  awards: {
    id: 'awards',
    label: 'Awards',
    Icon: FaAward,
    awardsData: [
      {
        id: 'graphic-designer',
        label: 'Graphic Designer',
        duration: '2015 - 2017',
        from: 'Web Graphy',
        address: 'Los Angeles, CA',
        bgColor: 'bg-[#FCF4FF] border-[#FCF4FF]',
      },
      {
        id: 'jr-web-developer',
        label: 'Jr. Web Developer',
        duration: '2014 - 2015',
        from: 'Creative Gigs',
        address: 'Los Angeles, CA',
        bgColor: 'bg-[#FEFAF0] border-[#FEFAF0]',
      },
      {
        id: 'best-freelancer',
        label: 'Best Freelancer',
        duration: '2021',
        from: 'Fiver & Upwork Level 2 & Top Rated',
        address: '',
        bgColor: 'bg-[#FCF4FF] border-[#FCF4FF]',
      },
    ],
  },
};
