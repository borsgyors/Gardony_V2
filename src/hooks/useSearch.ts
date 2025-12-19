import { useState, useEffect, useRef } from 'react';
import { useRouter } from 'next/navigation';

export interface SearchData {
  id: string;
  type: 'page' | 'event' | 'service' | 'news';
  title: string;
  url: string;
  keywords: string[];
  date?: string;
  excerpt?: string;
  elementId?: string; // Optional: ID of element on current page to scroll to
}

export interface SearchResult extends SearchData {
  score: number;
}

interface UseSearchOptions {
  data: SearchData[];
  maxResults?: number;
  debounceMs?: number;
  minQueryLength?: number;
}

interface UseSearchReturn {
  query: string;
  setQuery: (query: string) => void;
  results: SearchResult[];
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
  selectedIndex: number;
  setSelectedIndex: (index: number) => void;
  handleKeyDown: (e: React.KeyboardEvent<HTMLInputElement>) => void;
  navigateTo: (result: SearchResult) => void;
  clearSearch: () => void;
  inputRef: React.RefObject<HTMLInputElement | null>;
  containerRef: React.RefObject<HTMLDivElement | null>;
  isLoading: boolean;
  // Navigation features
  activeResultIndex: number;
  setActiveResultIndex: (index: number) => void;
  goToNext: () => void;
  goToPrev: () => void;
  scrollToResult: (index: number) => void;
  resultRefs: Map<string, HTMLElement | null>;
  registerResultRef: (id: string, element: HTMLElement | null) => void;
}

/**
 * Custom hook for search functionality
 * Handles debouncing, filtering, scoring, keyboard navigation
 */
export function useSearch({
  data,
  maxResults = 8,
  debounceMs = 150,
  minQueryLength = 2,
}: UseSearchOptions): UseSearchReturn {
  const router = useRouter();
  const [query, setQuery] = useState('');
  const [debouncedQuery, setDebouncedQuery] = useState('');
  const [results, setResults] = useState<SearchResult[]>([]);
  const [isOpen, setIsOpen] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(-1);
  const [isLoading, setIsLoading] = useState(false);
  const [activeResultIndex, setActiveResultIndex] = useState(0);

  const inputRef = useRef<HTMLInputElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const debounceTimer = useRef<NodeJS.Timeout | null>(null);
  const resultRefsMap = useRef<Map<string, HTMLElement | null>>(new Map());

  /**
   * Debounce logic
   */
  useEffect(() => {
    if (debounceTimer.current) {
      clearTimeout(debounceTimer.current);
    }

    setIsLoading(true);

    debounceTimer.current = setTimeout(() => {
      setDebouncedQuery(query);
      setIsLoading(false);
    }, debounceMs);

    return () => {
      if (debounceTimer.current) {
        clearTimeout(debounceTimer.current);
      }
    };
  }, [query, debounceMs]);

  /**
   * Scoring algorithm
   */
  const calculateScore = (item: SearchData, searchQuery: string): number => {
    if (!searchQuery.trim()) return 0;

    const q = searchQuery.toLowerCase().trim();
    const title = item.title.toLowerCase();
    const keywords = item.keywords.map((k: string) => k.toLowerCase());
    const excerpt = item.excerpt?.toLowerCase() || '';

    // Exact match - highest priority
    if (title === q) return 1000;
    
    // Title starts with query
    if (title.startsWith(q)) return 500;
    
    // Title contains query
    if (title.includes(q)) return 300;

    // Exact keyword match
    if (keywords.includes(q)) return 250;
    
    // Keyword starts with query
    if (keywords.some((k: string) => k.startsWith(q))) return 200;
    
    // Keyword contains query
    if (keywords.some((k: string) => k.includes(q))) return 150;

    // Excerpt contains query
    if (excerpt && excerpt.includes(q)) return 100;

    return 0;
  };

  /**
   * Filtering and ranking
   */
  useEffect(() => {
    if (!debouncedQuery.trim() || debouncedQuery.length < minQueryLength) {
      setResults([]);
      setIsOpen(false);
      setSelectedIndex(-1);
      return;
    }

    const filtered = data
      .map((item) => ({
        ...item,
        score: calculateScore(item, debouncedQuery),
      }))
      .filter((item) => item.score > 0)
      .sort((a, b) => b.score - a.score)
      .slice(0, maxResults);

    setResults(filtered);
    setIsOpen(filtered.length > 0);
    setSelectedIndex(-1);
    setActiveResultIndex(0);
  }, [debouncedQuery, data, maxResults, minQueryLength]);

  /**
   * Keyboard navigation
   */
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (!isOpen && e.key === 'Enter') {
      setIsOpen(true);
      return;
    }

    switch (e.key) {
      case 'ArrowDown':
        e.preventDefault();
        setSelectedIndex((i) =>
          i < results.length - 1 ? i + 1 : results.length - 1
        );
        break;

      case 'ArrowUp':
        e.preventDefault();
        setSelectedIndex((i) => (i > 0 ? i - 1 : 0));
        break;

      case 'Enter':
        e.preventDefault();
        if (selectedIndex >= 0 && results[selectedIndex]) {
          navigateTo(results[selectedIndex]);
        }
        break;

      case 'Escape':
        setIsOpen(false);
        setSelectedIndex(-1);
        break;

      default:
        break;
    }
  };

  /**
   * Find elements containing the search query in the DOM
   */
  const findElementsWithText = (searchText: string): HTMLElement[] => {
    const elements: HTMLElement[] = [];
    const query = searchText.toLowerCase().trim();
    
    if (!query) return elements;

    // Search in headings, paragraphs, and other text elements
    const selectors = 'h1, h2, h3, h4, h5, h6, p, span, div, a, li, td, th, label, button';
    const allElements = document.querySelectorAll(selectors);

    allElements.forEach((el) => {
      const element = el as HTMLElement;
      // Get direct text content (not from children)
      const text = Array.from(element.childNodes)
        .filter(node => node.nodeType === Node.TEXT_NODE)
        .map(node => node.textContent || '')
        .join(' ')
        .toLowerCase();

      if (text.includes(query)) {
        elements.push(element);
      }
    });

    return elements;
  };

  /**
   * Navigate to result
   */
  const navigateTo = (result: SearchResult) => {
    // Check if we're already on the target page
    const currentPath = window.location.pathname;
    const targetPath = result.url.split('#')[0].split('?')[0];
    
    // If elementId is provided and we're on the same page
    if (result.elementId && currentPath === targetPath) {
      const element = document.getElementById(result.elementId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'center' });
        element.classList.add('search-highlight');
        setTimeout(() => {
          element.classList.remove('search-highlight');
        }, 3000);
        clearSearch();
        return;
      }
    }

    // Try to find elements containing the search query on current page
    if (currentPath === targetPath && debouncedQuery.trim()) {
      const matchingElements = findElementsWithText(debouncedQuery);
      
      if (matchingElements.length > 0) {
        // Scroll to and highlight the first matching element
        const element = matchingElements[0];
        element.scrollIntoView({ behavior: 'smooth', block: 'center' });
        
        // Add highlight to all matching elements
        matchingElements.forEach((el) => {
          el.classList.add('search-highlight');
        });
        
        // Remove highlight after 3 seconds
        setTimeout(() => {
          matchingElements.forEach((el) => {
            el.classList.remove('search-highlight');
          });
        }, 3000);
        
        clearSearch();
        return;
      }
    }
    
    // Otherwise navigate to URL (with search query in sessionStorage for later highlighting)
    if (debouncedQuery.trim()) {
      sessionStorage.setItem('searchQuery', debouncedQuery);
    }
    router.push(result.url);
    clearSearch();
  };

  /**
   * Clear search state
   */
  const clearSearch = () => {
    setQuery('');
    setDebouncedQuery('');
    setResults([]);
    setIsOpen(false);
    setSelectedIndex(-1);
    inputRef.current?.blur();
  };

  /**
   * Click outside to close
   */
  useEffect(() => {
    const onClickOutside = (e: MouseEvent) => {
      if (!containerRef.current?.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };

    window.addEventListener('mousedown', onClickOutside);
    return () => window.removeEventListener('mousedown', onClickOutside);
  }, []);

  /**
   * Register a result element ref
   */
  const registerResultRef = (id: string, element: HTMLElement | null) => {
    if (element) {
      resultRefsMap.current.set(id, element);
    } else {
      resultRefsMap.current.delete(id);
    }
  };

  /**
   * Scroll to a specific result by index
   */
  const scrollToResult = (index: number) => {
    if (index < 0 || index >= results.length) return;

    const result = results[index];
    const element = resultRefsMap.current.get(result.id);

    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'center',
      });
      setActiveResultIndex(index);
    }
  };

  /**
   * Navigate to next result
   */
  const goToNext = () => {
    if (results.length === 0) return;
    const nextIndex = (activeResultIndex + 1) % results.length;
    scrollToResult(nextIndex);
  };

  /**
   * Navigate to previous result
   */
  const goToPrev = () => {
    if (results.length === 0) return;
    const prevIndex = activeResultIndex === 0 ? results.length - 1 : activeResultIndex - 1;
    scrollToResult(prevIndex);
  };

  /**
   * Auto-scroll to first result when results change
   */
  useEffect(() => {
    if (results.length > 0 && debouncedQuery.trim()) {
      // Small delay to ensure DOM is updated
      const timer = setTimeout(() => {
        scrollToResult(0);
      }, 100);
      return () => clearTimeout(timer);
    }
  }, [results.length > 0 ? results[0]?.id : null]);

  /**
   * Check for saved search query on mount and highlight matching elements
   */
  useEffect(() => {
    const savedQuery = sessionStorage.getItem('searchQuery');
    if (savedQuery) {
      sessionStorage.removeItem('searchQuery');
      
      // Wait for page to fully load
      setTimeout(() => {
        const matchingElements = findElementsWithText(savedQuery);
        
        if (matchingElements.length > 0) {
          const element = matchingElements[0];
          element.scrollIntoView({ behavior: 'smooth', block: 'center' });
          
          matchingElements.forEach((el) => {
            el.classList.add('search-highlight');
          });
          
          setTimeout(() => {
            matchingElements.forEach((el) => {
              el.classList.remove('search-highlight');
            });
          }, 3000);
        }
      }, 500);
    }
  }, []);

  return {
    query,
    setQuery,
    results,
    isOpen,
    setIsOpen,
    selectedIndex,
    setSelectedIndex,
    handleKeyDown,
    navigateTo,
    clearSearch,
    inputRef,
    containerRef,
    isLoading,
    activeResultIndex,
    setActiveResultIndex,
    goToNext,
    goToPrev,
    scrollToResult,
    resultRefs: resultRefsMap.current,
    registerResultRef,
  };
}
