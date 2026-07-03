import type { Metadata } from 'next';

import JsonLd from '@/components/common/JsonLd';
import PageWrapper from '@/components/common/PageWrapper';
import ExperienceHighlights from '@/components/features/Home/ExperienceHighlights';
import HighlightsGrid from '@/components/features/Home/HighlightsGrid';
import HomeCTA from '@/components/features/Home/HomeCTA';
import HomeHero from '@/components/features/Home/HomeHero';
import HowIWork from '@/components/features/Home/HowIWork';
import QuickStats from '@/components/features/Home/QuickStats';
import SkillsOverview from '@/components/features/Home/SkillsOverview';
import { homeHighlights, homeStats } from '@/lib/data/home';
import { profile } from '@/lib/data/profile';
import { renderIcon } from '@/lib/icons';

export const metadata: Metadata = {
  title: `Home | ${profile.name}`,
  description:
    'Senior Software Engineer with 12+ years building high-performance, user-centric web applications. Explore experience, skills, and contact details.',
  alternates: {
    canonical: '/',
  },
  openGraph: {
    url: '/',
    images: [{ url: '/opengraph-image', width: 1200, height: 630 }],
  },
  twitter: {
    images: ['/twitter-image'],
  },
};

export const revalidate = 86400;

const Home = () => {
  const highlights = homeHighlights.map((h) => ({
    ...h,
    // Use theme token for icon color
    icon: renderIcon(h.iconName, 'w-8 h-8 text-[var(--foreground)]'),
  }));
  const stats = homeStats;
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000';

  return (
    <PageWrapper>
      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'WebSite',
          url: baseUrl,
          name: `${profile.name} | ${profile.title}`,
          inLanguage: 'en-US',
        }}
      />
      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'Person',
          name: profile.name,
          url: baseUrl,
          jobTitle: profile.title,
          email: `mailto:${profile.email}`,
          telephone: profile.phone,
          sameAs: [profile.website],
        }}
      />
      {/* Hero Section */}
      <HomeHero />

      {/* Key Highlights */}
      <HighlightsGrid highlights={highlights} />

      {/* Quick Stats Section */}
      <QuickStats stats={stats} />

      {/* Experience Highlights (no duplication, concise) */}
      <ExperienceHighlights />

      {/* Skills Overview (compact, scannable) */}
      <SkillsOverview />

      {/* How I Work (behavioral & cultural) */}
      <HowIWork />

      {/* Final CTA */}
      <HomeCTA />
    </PageWrapper>
  );
};

export default Home;
