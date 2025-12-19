'use client';

import React, { useEffect } from 'react';
import { useSearch, SearchData } from '@/hooks/useSearch';
import { EventCard, EventData } from './EventCard';
import { ResultNavigator } from './ResultNavigator';
import { Search } from 'lucide-react';
import { Input } from './ui/input';

interface SearchableEventListProps {
  events: EventData[];
  searchData: SearchData[];
  title?: string;
  emptyMessage?: string;
  className?: string;
}

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
export const SearchableEventList: React.FC<SearchableEventListProps> = ({
  events,
  searchData,
  title = 'Események',
  emptyMessage = 'Nincs a keresésnek megfelelő esemény',
  className = '',
}) => {
  const {
    query,
    setQuery,
    results,
    activeResultIndex,
    goToNext,
    goToPrev,
    registerResultRef,
    scrollToResult,
  } = useSearch({
    data: searchData,
    maxResults: 100,
    debounceMs: 200,
    minQueryLength: 2,
  });

  // Filter events based on search results
  const filteredEvents = query.trim().length >= 2
    ? events.filter((event) =>
        results.some((result) => result.id === event.id)
      )
    : events;

  // Sort filtered events to match search results order
  const sortedEvents = query.trim().length >= 2
    ? [...filteredEvents].sort((a, b) => {
        const aIndex = results.findIndex((r) => r.id === a.id);
        const bIndex = results.findIndex((r) => r.id === b.id);
        return aIndex - bIndex;
      })
    : filteredEvents;

  // Keyboard shortcuts
  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      // Only if not typing in input
      if (document.activeElement?.tagName === 'INPUT') return;

      if (e.key === 'ArrowDown' || e.key === 'j') {
        e.preventDefault();
        goToNext();
      } else if (e.key === 'ArrowUp' || e.key === 'k') {
        e.preventDefault();
        goToPrev();
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [goToNext, goToPrev]);

  return (
    <div className={`space-y-6 ${className}`}>
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

            {/* Result Navigator */}
            {query.trim().length >= 2 && sortedEvents.length > 0 && (
              <ResultNavigator
                currentIndex={activeResultIndex}
                totalResults={sortedEvents.length}
                onNext={goToNext}
                onPrev={goToPrev}
              />
            )}
          </div>

          {/* Search Info */}
          {query.trim().length >= 2 && (
            <div className="mt-3 text-sm text-gray-600">
              {sortedEvents.length > 0 ? (
                <span>
                  <strong className="text-[#2C7BA0]">{sortedEvents.length}</strong> esemény találat
                  {' '}
                  <span className="text-gray-400">•</span>
                  {' '}
                  <span className="text-gray-500">
                    Használd a ↑↓ nyilakat a navigáláshoz
                  </span>
                </span>
              ) : (
                <span className="text-gray-500">
                  {emptyMessage}
                </span>
              )}
            </div>
          )}
        </div>
      </div>

      {/* Event List */}
      <div className="max-w-4xl mx-auto px-4">
        {sortedEvents.length > 0 ? (
          <div className="space-y-4">
            {sortedEvents.map((event, index) => (
              <EventCard
                key={event.id}
                ref={(el) => registerResultRef(event.id, el)}
                event={event}
                searchQuery={query}
                isActive={query.trim().length >= 2 && index === activeResultIndex}
                onClick={() => scrollToResult(index)}
              />
            ))}
          </div>
        ) : query.trim().length >= 2 ? (
          // Empty state
          <div className="text-center py-16">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gray-100 mb-4">
              <Search className="h-8 w-8 text-gray-400" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              {emptyMessage}
            </h3>
            <p className="text-gray-500">
              Próbálj meg más kulcsszavakat használni
            </p>
          </div>
        ) : (
          // All events (no search)
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              {title}
            </h2>
            {events.map((event) => (
              <EventCard
                key={event.id}
                event={event}
                searchQuery=""
                isActive={false}
              />
            ))}
          </div>
        )}
      </div>

      {/* Keyboard Shortcuts Help */}
      {sortedEvents.length > 1 && query.trim().length >= 2 && (
        <div className="fixed bottom-4 right-4 bg-gray-900 text-white text-xs px-3 py-2 rounded-lg shadow-lg">
          <div className="flex gap-4">
            <span>↑↓ Navigálás</span>
            <span>ESC Törlés</span>
          </div>
        </div>
      )}
    </div>
  );
};
