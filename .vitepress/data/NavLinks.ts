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
    url: '/pages/work/'
  },
  {
    label: 'Learning & Education',
    icon: AcademicCapIcon,
    url: '/pages/edu/'
  },
  {
    label: 'Projects',
    icon: FolderIcon,
    url: '/pages/projects/'
  },
  {
    label: 'Blog',
    icon: PencilSquareIcon,
    url: '/pages/blog/'
  },
  {
    label: 'Contact',
    icon: EnvelopeIcon,
    url: '/pages/contact/'
  }
];