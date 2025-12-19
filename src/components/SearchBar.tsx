'use client';

import React from 'react';
import { useSearch, SearchData } from '@/hooks/useSearch';
import './SearchBar.css';

interface SearchBarProps {
  data: SearchData[];
  placeholder?: string;
  maxResults?: number;
  debounceMs?: number;
}

const SearchBar: React.FC<SearchBarProps> = ({
  data,
  placeholder = 'Keresés...',
  maxResults = 8,
  debounceMs = 150,
}) => {
  const {
    query,
    setQuery,
    results,
    isOpen,
    selectedIndex,
    handleKeyDown,
    navigateTo,
    inputRef,
    containerRef,
  } = useSearch({ data, maxResults, debounceMs });

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
        <mark>{text.slice(idx, idx + query.length)}</mark>
        {text.slice(idx + query.length)}
      </>
    );
  };

  /**
   * Icons
   */
  const getIcon = (type: string) => {
    switch (type) {
      case 'event': return '📅';
      case 'service': return '🏢';
      case 'page': return '📄';
      case 'news': return '📰';
      default: return '📌';
    }
  };

  const getLabel = (type: string) => {
    switch (type) {
      case 'event': return 'Esemény';
      case 'service': return 'Szolgáltatás';
      case 'page': return 'Oldal';
      case 'news': return 'Hír';
      default: return 'Tartalom';
    }
  };
  return (
    <div className="search-bar-container" ref={containerRef}>
      <div className="search-bar-wrapper">
        <input
          ref={inputRef}
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onKeyDown={handleKeyDown}
          onFocus={() => query.trim() && results.length > 0}
          placeholder={placeholder}
          className="search-bar-input"
          autoComplete="off"
          aria-label="Keresés"
        />

        <div className="search-bar-icon">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <circle cx="11" cy="11" r="8" />
            <path d="m21 21-4.35-4.35" />
          </svg>
        </div>
      </div>

      {isOpen && results.length > 0 && (
        <ul className="search-results" id="search-results">
          {results.map((r, i) => (
            <li
              key={r.id + '-' + i}
              className={`search-result-item ${i === selectedIndex ? 'selected' : ''}`}
              onClick={() => navigateTo(r)}
              onMouseEnter={() => {}}
            >
              <div className="result-content">
                <div className="result-icon">{getIcon(r.type)}</div>

                <div className="result-info">
                  <div className="result-title">{highlightMatch(r.title, query)}</div>

                  <div className="result-meta">
                    <span className="result-type">{getLabel(r.type)}</span>
                    {r.date && <span className="result-date">{r.date}</span>}
                  </div>
                </div>
              </div>
            </li>
          ))}
        </ul>
      )}

      {isOpen && results.length === 0 && query.trim() && (
        <div className="search-no-results">Nincs találat</div>
      )}
    </div>
  );
};

export default SearchBar;
