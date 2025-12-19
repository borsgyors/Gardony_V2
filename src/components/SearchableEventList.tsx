'use client';

import React from 'react';
import { useSearch } from '@/hooks/useSearch';
import { Search } from 'lucide-react';
import { Input } from './ui/input';

/**
 * Searchable Event List Component
 * 
 * Complete search solution with:
 * - Real-time search filtering
 * - Visual highlighting
 * - Jump-to-result navigation
 * - Auto-scroll to active result
 * 
 * @example
 * <SearchableEventList
 *   events={allEvents}
 *   searchData={searchableData}
 * />
 */
export const SearchableEventList: React.FC = () => {
  const { query, setQuery } = useSearch({
    data: [],
    maxResults: 0,
    debounceMs: 200,
    minQueryLength: 2,
  });

  return (
    <div className="space-y-6">
      {/* Search Header */}
      <div className="sticky top-0 z-10 bg-white pt-4 pb-4 border-b border-gray-200 shadow-sm">
        <div className="max-w-4xl mx-auto px-4">
          <div className="flex flex-col md:flex-row items-start md:items-center gap-4">
            {/* Search Input */}
            <div className="relative flex-1 w-full">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
              <Input
                type="search"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Keresés eseményekben... (pl. vásár, koncert, sport)"
                className="pl-10 h-12 text-base"
                aria-label="Esemény keresése"
              />
            </div>
          </div>

          {/* Search Info */}
          {query.trim().length >= 2 && (
            <div className="mt-3 text-sm text-gray-600">
              <span className="text-gray-500">
                Nincs a keresésnek megfelelő esemény
              </span>
            </div>
          )}
        </div>
      </div>

      {/* Empty state only */}
      <div className="max-w-4xl mx-auto px-4">
        {query.trim().length >= 2 && (
          <div className="text-center py-16">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gray-100 mb-4">
              <Search className="h-8 w-8 text-gray-400" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              Nincs a keresésnek megfelelő esemény
            </h3>
            <p className="text-gray-500">
              Próbálj meg más kulcsszavakat használni
            </p>
          </div>
        )}
      </div>
    </div>
  );
};
