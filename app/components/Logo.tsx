import React from 'react';
import Image from 'next/image';

export default function Logo({ className = '' }: { className?: string }) {
  return (
    <div className={`inline-block ${className}`}>
      <Image
        src="/logo.svg"
        alt="the 4.0"
        width={40}
        height={41}
        className="h-15 w-auto"
        priority
      />
    </div>
  );
}

