'use client';

import { SearchableEventList } from '@/components/SearchableEventList';
import { searchData } from '@/data/searchData';
import { events } from '@/data/events';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import SearchBar from '@/components/SearchBar';

/**
 * Enhanced Search Demo Page
 * 
 * Demonstrates:
 * - Basic SearchBar component
 * - Advanced SearchableEventList with navigation
 * - Highlighting
 * - Auto-scroll
 * - Jump-to-result
 */

export default function SearchDemoPage() {
  // Transform events to match EventData interface
  const eventData = events.map((event) => ({
    id: event.id,
    title: event.title,
    date: event.date,
    time: event.time,
    location: event.location,
    description: event.description,
    category: 'Esemény',
    type: 'event',
  }));

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Header */}
      <div className="bg-white border-b border-gray-200 py-8">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center space-y-3">
            <Badge className="bg-[#2C7BA0] text-white text-sm px-4 py-1">
              Továbbfejlesztett Keresési Rendszer
            </Badge>
            <h1 className="text-4xl font-bold text-gray-900">
              Interaktív Keresés & Navigáció
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Valós idejű szűrés, vizuális kiemelés és jump-to-result navigáció
            </p>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="max-w-6xl mx-auto px-4 py-8">
        <Tabs defaultValue="advanced" className="w-full">
          <TabsList className="grid w-full max-w-md mx-auto grid-cols-2 mb-8">
            <TabsTrigger value="advanced">
              Fejlett Keresés
            </TabsTrigger>
            <TabsTrigger value="basic">
              Alap Keresés
            </TabsTrigger>
          </TabsList>

          {/* Advanced Search with Events */}
          <TabsContent value="advanced" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Fejlett Kereső Eseményekkel</CardTitle>
                <CardDescription>
                  Próbáld ki: "vásár", "koncert", "vízi", "bicikli"
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="bg-gray-50 rounded-lg p-4 mb-4">
                  <h3 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                    ✨ Új Funkciók
                  </h3>
                  <div className="grid md:grid-cols-2 gap-4 text-sm">
                    <div className="flex items-start gap-2">
                      <span className="text-xl">🎯</span>
                      <div>
                        <strong>Szöveges kiemelés</strong>
                        <p className="text-gray-600">A keresett kifejezések ki vannak emelve sárga háttérrel</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-2">
                      <span className="text-xl">📍</span>
                      <div>
                        <strong>Automatikus görgetés</strong>
                        <p className="text-gray-600">Az oldal az első találathoz görgeti</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-2">
                      <span className="text-xl">⬆️⬇️</span>
                      <div>
                        <strong>Navigáció nyilakkal</strong>
                        <p className="text-gray-600">Ugrás találatok között billentyűzettel</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-2">
                      <span className="text-xl">🎨</span>
                      <div>
                        <strong>Aktív találat kiemelés</strong>
                        <p className="text-gray-600">Kék keret és árnyék az aktív elemen</p>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Searchable Event List */}
            <SearchableEventList
              events={eventData}
              searchData={searchData.filter((item) => item.type === 'event')}
              title="Gárdonyi Események 2026"
              emptyMessage="Nincs a keresésnek megfelelő esemény"
            />
          </TabsContent>

          {/* Basic SearchBar */}
          <TabsContent value="basic" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Alap Keresőmező</CardTitle>
                <CardDescription>
                  Egyszerű keresés dropdown eredményekkel
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <SearchBar 
                  data={searchData} 
                  placeholder="Keresés... (pl. strand, vásár, étterem)"
                  maxResults={8}
                />

                <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                  <h3 className="font-semibold text-blue-900 mb-2">
                    💡 Használati Útmutató
                  </h3>
                  <ul className="space-y-1 text-sm text-blue-800">
                    <li>• Gépelj be legalább 2 karaktert</li>
                    <li>• Használd a ↑↓ nyilakat a listában</li>
                    <li>• Enter-rel ugorj az oldalra</li>
                    <li>• ESC-pel zárd be a keresést</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            {/* Features Grid */}
            <div className="grid md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Keresési Algoritmus</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span>Pontos címegyezés</span>
                      <Badge>1000 pont</Badge>
                    </div>
                    <div className="flex justify-between">
                      <span>Cím kezdődik a szóval</span>
                      <Badge>500 pont</Badge>
                    </div>
                    <div className="flex justify-between">
                      <span>Cím tartalmazza</span>
                      <Badge>300 pont</Badge>
                    </div>
                    <div className="flex justify-between">
                      <span>Kulcsszó egyezés</span>
                      <Badge>250 pont</Badge>
                    </div>
                    <div className="flex justify-between">
                      <span>Leírásban szerepel</span>
                      <Badge>100 pont</Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Tartalomtípusok</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3 text-sm">
                    <div className="flex items-center gap-3">
                      <span className="text-2xl">📄</span>
                      <div>
                        <strong>Oldalak</strong>
                        <p className="text-gray-600">{searchData.filter(d => d.type === 'page').length} oldal</p>
                      </div>
                    </div>

                    <div className="flex items-center gap-3">
                      <span className="text-2xl">📅</span>
                      <div>
                        <strong>Események</strong>
                        <p className="text-gray-600">{searchData.filter(d => d.type === 'event').length} esemény</p>
                      </div>
                    </div>

                    <div className="flex items-center gap-3">
                      <span className="text-2xl">🏢</span>
                      <div>
                        <strong>Szolgáltatások</strong>
                        <p className="text-gray-600">{searchData.filter(d => d.type === 'service').length} szolgáltatás</p>
                      </div>
                    </div>

                    <div className="flex items-center gap-3">
                      <span className="text-2xl">📰</span>
                      <div>
                        <strong>Hírek</strong>
                        <p className="text-gray-600">{searchData.filter(d => d.type === 'news').length} hír</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Technical Details */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Technikai Részletek</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-3 gap-4 text-sm">
                  <div>
                    <strong className="text-gray-900">Debouncing</strong>
                    <p className="text-gray-600">200ms késleltetés</p>
                  </div>
                  <div>
                    <strong className="text-gray-900">Min. karakterek</strong>
                    <p className="text-gray-600">2 karakter</p>
                  </div>
                  <div>
                    <strong className="text-gray-900">Max. eredmények</strong>
                    <p className="text-gray-600">8 találat</p>
                  </div>
                  <div>
                    <strong className="text-gray-900">Keresési idő</strong>
                    <p className="text-gray-600">&lt; 50ms</p>
                  </div>
                  <div>
                    <strong className="text-gray-900">Első eredmény</strong>
                    <p className="text-gray-600">&lt; 250ms</p>
                  </div>
                  <div>
                    <strong className="text-gray-900">Összesen</strong>
                    <p className="text-gray-600">{searchData.length} kereshető elem</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>

      {/* Footer Info */}
      <div className="border-t border-gray-200 bg-white py-8 mt-12">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <p className="text-gray-600">
            <strong>Komponensek:</strong> useSearch hook, HeaderSearch, SearchBar, 
            EventCard, ResultNavigator, Highlight util
          </p>
          <p className="text-sm text-gray-500 mt-2">
            Teljes implementáció: <code className="bg-gray-100 px-2 py-1 rounded">src/hooks/useSearch.ts</code>,{' '}
            <code className="bg-gray-100 px-2 py-1 rounded">src/lib/highlight.tsx</code>
          </p>
        </div>
      </div>
    </div>
  );
}
