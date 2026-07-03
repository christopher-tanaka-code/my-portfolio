import { profile } from '@/lib/data/profile';

export const contactMethods = [
  {
    iconName: 'email',
    title: 'Email',
    value: profile.email,
    action: `mailto:${profile.email}`,
    gradient: 'from-blue-500 to-cyan-500',
    description: 'Perfect for detailed discussions',
  },
  {
    iconName: 'phone',
    title: 'Phone',
    value: profile.phone,
    action: `tel:${profile.phoneTel}`,
    gradient: 'from-green-500 to-emerald-500',
    description: 'Great for quick conversations',
  },
  {
    iconName: 'location',
    title: 'Location',
    value: profile.location,
    action: '#',
    gradient: 'from-purple-500 to-pink-500',
    description: 'Based in Miami; open to remote work',
  },
  {
    iconName: 'website',
    title: 'Website',
    value: profile.websiteDisplay,
    action: profile.website,
    gradient: 'from-orange-500 to-red-500',
    description: 'More about my work',
  },
] as const;
