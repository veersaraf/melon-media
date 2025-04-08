'use client';
import React from 'react';
import Gallery from '../../src/components/Gallery';

export default function WorkPage() {
  return (
    <main className="min-h-screen">
      <div className="container mx-auto px-4 pb-16">
        <div className="py-8">
          <button className="text-lg font-medium text-gray-700 hover:text-gray-900">
            Work
          </button>
        </div>
        <Gallery />
      </div>
    </main>
  );
} 