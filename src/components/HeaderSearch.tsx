'use client';

import React, { useCallback } from 'react';
import { useSearch, SearchData } from '@/hooks/useSearch';
import { Search, X, ChevronUp, ChevronDown } from 'lucide-react';

interface HeaderSearchProps {
  data: SearchData[];
  placeholder?: string;
}

export function HeaderSearch({ data, placeholder = 'Keresés...' }: HeaderSearchProps) {
  const {
    query,
    setQuery,
    results,
    isOpen,
    selectedIndex,
    setSelectedIndex,
    handleKeyDown,
    navigateTo,
    inputRef,
    containerRef,
  } = useSearch({ data, maxResults: 8, debounceMs: 200 });

  /**
   * Highlight matched text
   */
  const highlightMatch = (text: string, q: string) => {
    if (!q.trim()) return text;

    const query = q.toLowerCase();
    const lowerText = text.toLowerCase();
    const idx = lowerText.indexOf(query);

    if (idx === -1) return text;

    return (
      <>
        {text.slice(0, idx)}
        <mark className="bg-yellow-200 text-gray-900">{text.slice(idx, idx + query.length)}</mark>
        {text.slice(idx + query.length)}
      </>
    );
  };

  /**
   * Icons
   */
  const getIcon = (type: string) => {
    switch (type) {
      case 'event':
        return '📅';
      case 'service':
        return '🏢';
      case 'page':
        return '📄';
      case 'news':
        return '📰';
      default:
        return '📌';
    }
  };

  const getLabel = (type: string) => {
    switch (type) {
      case 'event':
        return 'Esemény';
      case 'service':
        return 'Szolgáltatás';
      case 'page':
        return 'Oldal';
      case 'news':
        return 'Hír';
      default:
        return 'Tartalom';
    }
  };

  const goToPrevious = useCallback(() => {
    if (results.length === 0) return;
    const newIndex = selectedIndex <= 0 ? results.length - 1 : selectedIndex - 1;
    setSelectedIndex(newIndex);
  }, [results.length, selectedIndex, setSelectedIndex]);

  const goToNext = useCallback(() => {
    if (results.length === 0) return;
    const newIndex = selectedIndex >= results.length - 1 ? 0 : selectedIndex + 1;
    setSelectedIndex(newIndex);
  }, [results.length, selectedIndex, setSelectedIndex]);

  const selectCurrent = useCallback(() => {
    if (selectedIndex >= 0 && results[selectedIndex]) {
      navigateTo(results[selectedIndex]);
    }
  }, [selectedIndex, results, navigateTo]);

  const clearSearch = useCallback(() => {
    setQuery('');
  }, [setQuery]);

  return (
    <>
      <style>{`
        @keyframes searchHighlight {
          0% { 
            background-color: rgba(253, 224, 71, 0.9);
            box-shadow: 0 0 0 4px rgba(251, 191, 36, 0.4);
          }
          50% {
            background-color: rgba(253, 224, 71, 0.6);
            box-shadow: 0 0 0 8px rgba(251, 191, 36, 0.2);
          }
          100% { 
            background-color: rgba(253, 224, 71, 0.2);
            box-shadow: 0 0 0 0 rgba(251, 191, 36, 0);
          }
        }
        .search-highlight {
          animation: searchHighlight 3s ease-out;
          outline: 3px solid #f59e0b !important;
          outline-offset: 6px !important;
          border-radius: 6px !important;
          position: relative;
          z-index: 10;
          transition: all 0.3s ease;
        }
        /* Hide native browser clear (X) so only one X shows */
        input[type="search"]::-webkit-search-cancel-button {
          -webkit-appearance: none;
          appearance: none;
          display: none;
        }
        input[type="search"]::-webkit-search-decoration,
        input[type="search"]::-webkit-search-results-button,
        input[type="search"]::-webkit-search-results-decoration {
          display: none;
        }
        input[type="search"]::-ms-clear,
        input[type="search"]::-ms-reveal {
          display: none;
          width: 0;
          height: 0;
        }
      `}</style>
      
      <div className="relative w-full" ref={containerRef}>
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-[#64748B] pointer-events-none z-10" />
          <input
            ref={inputRef}
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder={placeholder}
            className="w-full pl-10 pr-10 py-2.5 text-base border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2C7BA0] focus:border-transparent"
            autoComplete="off"
            aria-label="Keresés a weboldalon"
            aria-describedby="search-instructions"
          />
          {query && (
            <button
              onClick={clearSearch}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 focus:outline-none"
              aria-label="Keresés törlése"
            >
              <X className="w-5 h-5" />
            </button>
          )}
        </div>

        {isOpen && results.length > 0 && (
          <div className="absolute top-full left-0 right-0 mt-2 bg-white border border-gray-200 rounded-lg shadow-xl max-h-[32rem] overflow-hidden z-50">
            {/* Navigation instructions */}
            <div className="px-4 py-2 bg-gray-50 border-b border-gray-200 flex items-center justify-between text-xs text-gray-600">
              <div className="flex items-center gap-3">
                <span className="flex items-center gap-1">
                  <kbd className="px-1.5 py-0.5 bg-white border border-gray-300 rounded font-mono">↑</kbd>
                  <kbd className="px-1.5 py-0.5 bg-white border border-gray-300 rounded font-mono">↓</kbd>
                  : léptetés
                </span>
                <span className="flex items-center gap-1">
                  <kbd className="px-1.5 py-0.5 bg-white border border-gray-300 rounded font-mono">Enter</kbd>
                  : kiválasztás
                </span>
                <span className="flex items-center gap-1">
                  <kbd className="px-1.5 py-0.5 bg-white border border-gray-300 rounded font-mono">Esc</kbd>
                  : bezárás
                </span>
              </div>
              <span className="font-medium text-blue-600">
                {selectedIndex >= 0 ? selectedIndex + 1 : 1} / {results.length}
              </span>
            </div>

            {/* Results list */}
            <ul className="divide-y divide-gray-100 overflow-y-auto max-h-[28rem]">
              {results.map((result, i) => (
                <li
                  key={result.id}
                  className={`p-3 cursor-pointer transition-all ${
                    i === selectedIndex
                      ? 'bg-blue-50 border-l-4 border-l-blue-600'
                      : 'hover:bg-gray-50 border-l-4 border-l-transparent'
                  }`}
                  onClick={() => navigateTo(result)}
                  onMouseEnter={() => setSelectedIndex(i)}
                >
                  <div className="flex items-start gap-3">
                    <div className="text-2xl flex-shrink-0" aria-hidden="true">
                      {getIcon(result.type)}
                    </div>

                    <div className="flex-1 min-w-0">
                      <div className="font-semibold text-gray-900 mb-1">
                        {highlightMatch(result.title, query)}
                      </div>

                      <div className="flex items-center gap-2 text-xs text-gray-500 mb-1">
                        <span className="px-2 py-0.5 bg-gray-100 rounded font-medium">
                          {getLabel(result.type)}
                        </span>
                        {result.date && (
                          <span className="text-gray-400">📅 {result.date}</span>
                        )}
                      </div>

                      {result.excerpt && (
                        <p className="text-sm text-gray-600 line-clamp-2">
                          {result.excerpt}
                        </p>
                      )}
                    </div>

                    {i === selectedIndex && (
                      <div className="flex-shrink-0 text-blue-600">
                        →
                      </div>
                    )}
                  </div>
                </li>
              ))}
            </ul>
          </div>
        )}

        {isOpen && results.length === 0 && query.trim() && (
          <div className="absolute top-full left-0 right-0 mt-2 bg-white border border-gray-200 rounded-lg shadow-xl p-4 text-center text-gray-500 z-50">
            ❌ Nincs találat a keresett kifejezésre
          </div>
        )}
      </div>
    </>
  );
}
