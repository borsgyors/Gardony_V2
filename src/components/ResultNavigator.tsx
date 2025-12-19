'use client';

import React from 'react';
import { ChevronUp, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface ResultNavigatorProps {
  currentIndex: number;
  totalResults: number;
  onNext: () => void;
  onPrev: () => void;
  className?: string;
}

/**
 * Result Navigator Component
 * 
 * Displays "X / Y results" and provides navigation buttons
 * to jump between search results
 * 
 * @example
 * <ResultNavigator
 *   currentIndex={0}
 *   totalResults={5}
 *   onNext={() => goToNext()}
 *   onPrev={() => goToPrev()}
 * />
 */
export const ResultNavigator: React.FC<ResultNavigatorProps> = ({
  currentIndex,
  totalResults,
  onNext,
  onPrev,
  className = '',
}) => {
  if (totalResults === 0) {
    return null;
  }

  return (
    <div
      className={`flex items-center gap-3 bg-white border border-gray-200 rounded-lg px-4 py-2 shadow-sm ${className}`}
      role="navigation"
      aria-label="Találatok közötti navigáció"
    >
      {/* Result Counter */}
      <div className="text-sm font-medium text-gray-700">
        <span className="text-[#2C7BA0] font-bold text-lg">{currentIndex + 1}</span>
        {' / '}
        <span className="text-gray-500">{totalResults}</span>
        <span className="ml-1 text-gray-500">találat</span>
      </div>

      {/* Navigation Buttons */}
      <div className="flex items-center gap-1 border-l border-gray-200 pl-3">
        <Button
          variant="ghost"
          size="sm"
          onClick={onPrev}
          disabled={totalResults <= 1}
          className="h-8 w-8 p-0 hover:bg-gray-100"
          aria-label="Előző találat"
          title="Előző találat (↑)"
        >
          <ChevronUp className="h-4 w-4" />
        </Button>

        <Button
          variant="ghost"
          size="sm"
          onClick={onNext}
          disabled={totalResults <= 1}
          className="h-8 w-8 p-0 hover:bg-gray-100"
          aria-label="Következő találat"
          title="Következő találat (↓)"
        >
          <ChevronDown className="h-4 w-4" />
        </Button>
      </div>
    </div>
  );
};

/**
 * Compact version for inline use
 */
export const ResultNavigatorCompact: React.FC<ResultNavigatorProps> = ({
  currentIndex,
  totalResults,
  onNext,
  onPrev,
  className = '',
}) => {
  if (totalResults === 0) {
    return null;
  }

  return (
    <div
      className={`inline-flex items-center gap-2 bg-blue-50 border border-blue-200 rounded-md px-2 py-1 text-xs ${className}`}
    >
      <span className="font-semibold text-blue-700">
        {currentIndex + 1}/{totalResults}
      </span>
      <div className="flex gap-0.5">
        <button
          onClick={onPrev}
          disabled={totalResults <= 1}
          className="p-0.5 hover:bg-blue-100 rounded disabled:opacity-50 disabled:cursor-not-allowed"
          aria-label="Előző"
        >
          <ChevronUp className="h-3 w-3" />
        </button>
        <button
          onClick={onNext}
          disabled={totalResults <= 1}
          className="p-0.5 hover:bg-blue-100 rounded disabled:opacity-50 disabled:cursor-not-allowed"
          aria-label="Következő"
        >
          <ChevronDown className="h-3 w-3" />
        </button>
      </div>
    </div>
  );
};
