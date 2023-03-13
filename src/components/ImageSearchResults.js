import Link from 'next/link';
import React from 'react';

export default function ImageSearchResults({ results }) {
  return (
    <div className="pb-24 mt-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 px3 space-x-3">
        {results.items.map((result) => (
          <div key={results.link} className="mb-8">
            <div className="group">
              <Link href={result.image.contextLink}>
                <img
                  src={result.link}
                  alt={result.title}
                  className="h-60 group-hover:shadow-xl w-full object-contain transition-shadow"
                  key={result.link}
                />
              </Link>
              <Link
                className="group-hover:underline truncate-1 text-xl"
                href={result.image.contextLink}
              >
                <h2>{result.title}</h2>
              </Link>
              <Link href={result.image.contextLink}>
                <p className="group-hover:underline text-gray-600">
                  {result.displayLink}
                </p>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
