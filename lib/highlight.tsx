import React from 'react';

/**
 * Utility function to escape special regex characters
 */
export function escapeRegex(text: string): string {
  return text.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

/**
 * Split text into parts based on search query
 * Returns array of {text, isMatch} objects
 */
export function splitTextByQuery(
  text: string,
  query: string
): Array<{ text: string; isMatch: boolean }> {
  if (!query.trim() || !text) {
    return [{ text, isMatch: false }];
  }

  try {
    const escapedQuery = escapeRegex(query.trim());
    const regex = new RegExp(`(${escapedQuery})`, 'gi');
    const parts = text.split(regex);

    return parts
      .filter((part) => part.length > 0)
      .map((part) => ({
        text: part,
        isMatch: regex.test(part),
      }));
  } catch (error) {
    // Fallback if regex fails
    return [{ text, isMatch: false }];
  }
}

/**
 * Props for Highlight component
 */
interface HighlightProps {
  text: string;
  query: string;
  className?: string;
  highlightClassName?: string;
}

/**
 * Highlight component that visually emphasizes matching text
 * 
 * @example
 * <Highlight text="Gárdony Nyári Vásár" query="vásár" />
 */
export const Highlight: React.FC<HighlightProps> = React.memo(
  ({ text, query, className = '', highlightClassName = '' }) => {
    if (!query.trim()) {
      return <span className={className}>{text}</span>;
    }

    const parts = splitTextByQuery(text, query);

    return (
      <span className={className}>
        {parts.map((part, index) => {
          if (part.isMatch) {
            return (
              <mark
                key={index}
                className={
                  highlightClassName ||
                  'bg-yellow-200 text-gray-900 font-semibold px-0.5 rounded'
                }
              >
                {part.text}
              </mark>
            );
          }
          return <span key={index}>{part.text}</span>;
        })}
      </span>
    );
  }
);

Highlight.displayName = 'Highlight';

/**
 * Hook version for more control
 */
export function useHighlight(text: string, query: string) {
  return React.useMemo(() => {
    return splitTextByQuery(text, query);
  }, [text, query]);
}
