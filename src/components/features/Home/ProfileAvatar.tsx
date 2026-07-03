'use client';

import Image from 'next/image';

import { profile } from '@/lib/data/profile';

const ProfileAvatar = () => {
  const [firstName, ...lastNameParts] = profile.name.split(' ');
  const lastName = lastNameParts.join(' ');

  return (
    <div className="relative flex flex-col items-center mt-16">
      <div className="relative">
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 rounded-full blur-2xl opacity-30 animate-pulse-glow"></div>
        <div className="relative w-40 h-40 rounded-full overflow-hidden border-4 border-transparent bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 p-1 animate-fade-in-scale shadow-2xl">
          <div className="w-full h-full rounded-full overflow-hidden">
            <Image
              src="/photo.png"
              alt={profile.name}
              width={160}
              height={160}
              className="w-full h-full object-cover"
              priority
            />
          </div>
        </div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-48 h-48 border-2 border-dashed border-[var(--glass-border)] rounded-full animate-rotate-slow"></div>
      </div>
      <div
        className="mt-8 text-center space-y-4 animate-fade-in-scale w-full"
        style={{ animationDelay: '0.3s' }}
      >
        <h1 className="text-5xl sm:text-6xl font-bold">
          <span className="gradient-text">{firstName}</span>
          <br />
          <span className="text-[var(--foreground)]">{lastName}</span>
        </h1>

        <div className="relative">
          <h2 className="text-2xl sm:text-3xl font-medium text-[var(--muted)] mb-2">
            {profile.title}
          </h2>

          <div className="w-32 h-1 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-full mx-auto animate-pulse-glow"></div>
        </div>
      </div>

      <div className="mt-10 w-full max-w-3xl px-4" />
    </div>
  );
};

export default ProfileAvatar;
