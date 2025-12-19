'use client';

import SearchBar from '@/components/SearchBar';
import { searchData } from '@/data/searchData';
import './SearchBarShowcase.css';

/**
 * SearchBarShowcase - Interactive demo of the SearchBar component
 * 
 * Features demonstrated:
 * - Real-time search with scoring
 * - Keyboard navigation
 * - Mobile responsiveness
 * - Result highlighting
 * - Type icons and labels
 */

export function SearchBarShowcase() {
  return (
    <div className="showcase-container">
      <div className="showcase-header">
        <h1>🔍 Gárdony Keresési Eszköz</h1>
        <p className="showcase-subtitle">Valós idejű keresés a város összes tartalmában</p>
      </div>

      <div className="showcase-section">
        <h2>Főoldali Keresés</h2>
        <p className="showcase-description">
          Ez a keresési sáv ideális a weboldal fejlécébe vagy főoldali hero szekciójába.
        </p>
        <div className="showcase-search-wrapper">
          <SearchBar 
            data={searchData}
            placeholder="Keresés: balaton, nyár, szállás, étterem..."
          />
        </div>
      </div>

      <div className="showcase-section">
        <h2>Keresési Tippek</h2>
        <div className="showcase-tips">
          <div className="tip">
            <h4>📍 Helyek & Szállás</h4>
            <code>strand, szállás, hotel, kemping</code>
          </div>
          <div className="tip">
            <h4>🎉 Programok & Rendezvények</h4>
            <code>fesztivál, nyár, event, koncert</code>
          </div>
          <div className="tip">
            <h4>🍽️ Vendéglátás</h4>
            <code>étterem, kávézó, étkezdés, ital</code>
          </div>
          <div className="tip">
            <h4>🚴 Aktivitások</h4>
            <code>kerékpár, vitorlázás, kajak, sport</code>
          </div>
        </div>
      </div>

      <div className="showcase-section">
        <h2>⌨️ Billentyűzetkombinációk</h2>
        <div className="showcase-shortcuts">
          <div className="shortcut">
            <kbd>↓</kbd>
            <span>Következő eredmény</span>
          </div>
          <div className="shortcut">
            <kbd>↑</kbd>
            <span>Előző eredmény</span>
          </div>
          <div className="shortcut">
            <kbd>Enter</kbd>
            <span>Kijelölt elem megnyitása</span>
          </div>
          <div className="shortcut">
            <kbd>Esc</kbd>
            <span>Keresés bezárása</span>
          </div>
        </div>
      </div>

      <div className="showcase-section">
        <h2>📊 Hogyan Működik a Keresés?</h2>
        <div className="showcase-algo">
          <h3>Pontszámítási Rendszer</h3>
          <p>Az eredmények így rangsorolódnak a relevancia szerint:</p>
          <ul className="algo-list">
            <li>
              <strong>Tökéletes cím egyezés:</strong> 1000 pont
              <code>Keresés: "balaton" → "Balaton-Tudnivalók"</code>
            </li>
            <li>
              <strong>Cím kezdete megegyezik:</strong> 500 pont
              <code>Keresés: "balat" → "Balaton-Tudnivalók"</code>
            </li>
            <li>
              <strong>Cím tartalmazza:</strong> 300 pont
              <code>Keresés: "tó" → "Balaton-Tudnivalók"</code>
            </li>
            <li>
              <strong>Kulcsszó tökéletes egyezés:</strong> 250 pont
              <code>Keresés: "balaton" (kulcsszó) → "Vízi Sportok"</code>
            </li>
            <li>
              <strong>Kulcsszó tartalmazza:</strong> 150 pont
              <code>Keresés: "bal" → Eredmények "balaton" kulcsszóval</code>
            </li>
          </ul>
        </div>
      </div>

      <div className="showcase-section">
        <h2>✨ Funkciók</h2>
        <div className="showcase-features">
          <div className="feature">
            <span className="feature-icon">⚡</span>
            <h4>Valós idejű szűrés</h4>
            <p>150ms késleltetéses debouncing a gyors, zökkenőmentes felhasználói élményhez</p>
          </div>
          <div className="feature">
            <span className="feature-icon">📱</span>
            <h4>Mobilbarát</h4>
            <p>Teljes responszív design, 16px+ font az iOS zoom megelőzésére</p>
          </div>
          <div className="feature">
            <span className="feature-icon">🎨</span>
            <h4>Sötét mód</h4>
            <p>Automatikus rendszer preferenciához alkalmazkodás</p>
          </div>
          <div className="feature">
            <span className="feature-icon">⌨️</span>
            <h4>Teljes billentyűzet támogatás</h4>
            <p>Navigálás és kiválasztás egér nélkül</p>
          </div>
          <div className="feature">
            <span className="feature-icon">🔤</span>
            <h4>Szöveg kiemelés</h4>
            <p>Az egyeztetett szövegrészletek kiemelve az eredményekben</p>
          </div>
          <div className="feature">
            <span className="feature-icon">🏷️</span>
            <h4>Típus jelzések</h4>
            <p>Ikonok és feliratok (Oldal / Esemény / Szolgáltatás)</p>
          </div>
        </div>
      </div>

      <div className="showcase-section showcase-code">
        <h2>💻 Integrálási Kód</h2>
        <p className="showcase-description">
          Másolja be ezt az importot és komponenst az alkalmazásba:
        </p>
        <pre className="showcase-pre"><code>{`import SearchBar from '@/components/SearchBar';
import { searchData } from '@/data/searchData';

export default function MyComponent() {
  return (
    <SearchBar 
      data={searchData}
      placeholder="Keresés..."
      maxResults={8}
      debounceMs={150}
    />
  );
}`}</code></pre>
      </div>

      <div className="showcase-section showcase-data">
        <h2>📋 Adatstruktúra</h2>
        <p className="showcase-description">
          Minden keresési elem így néz ki:
        </p>
        <pre className="showcase-pre"><code>{`interface SearchData {
  id: string;                    // Egyedi azonosító
  type: 'page' | 'event' | 'service';  // Tartalom típusa
  title: string;                 // Megjelenítendő név
  url: string;                   // Navigálási URL
  keywords: string[];            // Kereshetőségi szempontok
  date?: string;                 // Opcionális: eseménydátum (YYYY-MM-DD)
}`}</code></pre>
      </div>

      <div className="showcase-section">
        <h2>📚 Dokumentáció</h2>
        <p>
          Teljes integrációs útmutató: <strong>SEARCH_BAR_INTEGRATION.md</strong>
        </p>
        <p className="showcase-description">
          A dokumentáció tartalmazza:
        </p>
        <ul className="doc-list">
          <li>Telepítési lépéseket</li>
          <li>Konfigurációs lehetőségeket</li>
          <li>Stílusok testreszabását</li>
          <li>Billentyűzet parancsokat</li>
          <li>Teljesítményt optimalizálást</li>
          <li>Hibaelhárítást</li>
        </ul>
      </div>
    </div>
  );
}

export default SearchBarShowcase;
