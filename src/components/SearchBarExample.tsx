'use client';

import SearchBar from '@/components/SearchBar';
import { searchData } from '@/data/searchData';

/**
 * SearchBarExample - Shows how to integrate SearchBar into your site
 * 
 * Use Cases:
 * 1. In site-header.tsx - Add to navigation bar
 * 2. As a hero section - Large search on homepage
 * 3. Standalone page - Create /keresés page for search
 */

export function SearchBarExample() {
  return (
    <div className="search-example-container">
      <h2>Keresés a webhelyen</h2>
      <p>Írj be egy szót vagy kifejezést a kereséshez</p>
      <SearchBar 
        data={searchData}
        placeholder="Keresés (pl. balaton, nyár, szállás)..."
        maxResults={8}
        debounceMs={150}
      />
    </div>
  );
}

/**
 * Usage Examples:
 * 
 * 1. IN SITE HEADER:
 * ==================
 * import { SearchBarExample } from '@/components/SearchBarExample';
 * 
 * export function SiteHeader() {
 *   return (
 *     <header>
 *       <nav>
 *         <Logo />
 *         <NavItems />
 *       </nav>
 *       <div style={{ flex: 1, maxWidth: '500px' }}>
 *         <SearchBarExample />
 *       </div>
 *     </header>
 *   );
 * }
 * 
 * 2. ON HOMEPAGE HERO:
 * ====================
 * export default function Home() {
 *   return (
 *     <main>
 *       <section className="hero">
 *         <h1>Gárdony - Balaton-partjának Gyöngyszeme</h1>
 *         <SearchBarExample />
 *       </section>
 *     </main>
 *   );
 * }
 * 
 * 3. DEDICATED SEARCH PAGE:
 * =========================
 * // src/app/keresés/page.tsx
 * import { SearchBarExample } from '@/components/SearchBarExample';
 * 
 * export default function SearchPage() {
 *   return (
 *     <div className="page-container">
 *       <h1>Keresés</h1>
 *       <SearchBarExample />
 *     </div>
 *   );
 * }
 */

/**
 * CUSTOMIZATION:
 * 
 * Change the placeholder:
 * <SearchBar placeholder="Mi érdekel?" />
 * 
 * Show more results:
 * <SearchBar maxResults={12} />
 * 
 * Faster response:
 * <SearchBar debounceMs={100} />
 * 
 * Custom data:
 * import { customData } from '@/data/customSearchData';
 * <SearchBar data={customData} />
 */
