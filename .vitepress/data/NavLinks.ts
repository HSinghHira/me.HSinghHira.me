import {
  UserIcon,
  BriefcaseIcon,
  AcademicCapIcon,
  FolderIcon,
  PencilSquareIcon,
  EnvelopeIcon
} from '@heroicons/vue/24/outline';

// Define your menu items for PrimeVue
export const menuItems = [
  {
    label: 'Introduction',
    icon: UserIcon, // Use Heroicon component
    url: '/'
  },
  {
    label: 'Pro Work Experience',
    icon: BriefcaseIcon,
    url: '/work/'
  },
  {
    label: 'Learning & Education',
    icon: AcademicCapIcon,
    url: '/education/'
  },
  {
    label: 'Projects',
    icon: FolderIcon,
    url: '/projects/'
  },
  {
    label: 'Blog',
    icon: PencilSquareIcon,
    url: '/blog/'
  },
  {
    label: 'Contact',
    icon: EnvelopeIcon,
    url: '/contact/'
  }
];