export type Language = 'hu' | 'en' | 'de'

export const languages = {
  hu: 'Magyar',
  en: 'English',
  de: 'Deutsch'
}

export const translations = {
  hu: {
    // Header & Navigation
    'site.title': 'Gárdony Város',
    'site.subtitle': 'Önkormányzat',
    'nav.home': 'Főoldal',
    'nav.about': 'Bemutatkozás',
    'nav.news': 'Hírek',
    'nav.documents': 'Dokumentumok',
    'nav.tourism': 'Turizmus',
    'nav.services': 'Szolgáltatások',
    'nav.contact': 'Kapcsolat',
    
    // Search
    'search.placeholder': 'Keresés...',
    'search.button': 'Keresés',
    
    // Homepage
    'home.welcome': 'Üdvözöljük Gárdony Város hivatalos honlapján',
    'home.subtitle': 'A Velencei-tó partján, Budapesttől 50 km-re található város, ahol találkozik a természet szépsége a modern városi élettel',
    'home.cta.contact': 'Kapcsolatfelvétel',
    'home.cta.services': 'Szolgáltatások',
    
    // Mayor's Message
    'mayor.title': 'Polgármesteri Köszöntő',
    'mayor.name': 'Eötvös Pál Árpád',
    'mayor.position': 'Polgármester',
    'mayor.message': 'Kedves Látogató!\n\nSok szeretettel köszöntöm Önt Gárdony Város Önkormányzatának honlapján!\n\nNégy településrészen – Agárdon, Csiribpusztán, Dinnyésen és Gárdonyban - több mint tizenháromezren élünk állandó lakosként, de ez a szám a valóságban jóval nagyobb, hiszen nagyon sok nyaralótulajdonos tölti nálunk a szabadidejét, nagy számban érkeznek turisták, sportolók, kerékpárosok, kirándulók, horgászok, akik a Velencei-tavat és Gárdonyt választják kikapcsolódásuk helyszínéül.\n\nVárosunk vonzereje gyönyörű fekvésében, forrásaink gyógyhatásában, a környéken termő zamatos, jó boraiban, de legfőképpen az itt élő emberek vendégszeretetében rejlik. Történelmi, kulturális hagyományaink, évtizedekre visszatekintő rendezvényeink és természeti kincseink minden évszakban várják az itt élőket és a hozzánk látogatókat.\n\nA kiváló közlekedési kapcsolat Budapesttel és Székesfehérvárral a vállalkozások és az új otthont keresők számára is vonzóvá teszi településünket, amire nagyon büszkék vagyunk.\n\nHonlapunkon keresztül az érdeklődők megismerhetik városunk múltját, jelenét, nyomon követhetik az aktuális eseményeket. Az itt élők részére pedig szeretnénk megkönnyíteni a hivatalos ügyek intézését; oldalunkon megtalálhatják az összes fontos tudnivalót, letölthetnek nyomtatványokat, lehetőség van elektronikus ügyintézésre is.\n\nA személyes találkozás reményében kívánok virtuális barangolásához hasznos és kellemes időtöltést!\n\nEötvös Pál Árpád\npolgármester',
    
    // Quick Access
    'quick.title': 'Gyors elérés',
    'quick.subtitle': 'A legfontosabb szolgáltatások és információk egy kattintásra',
    'quick.news': 'Hírek',
    'quick.news.desc': 'Aktuális hírek és közlemények',
    'quick.documents': 'Dokumentumok',
    'quick.documents.desc': 'Űrlapok és hivatalos dokumentumok',
    'quick.tourism': 'Turizmus',
    'quick.tourism.desc': 'Látványosságok és programok',
    'quick.services': 'Szolgáltatások',
    'quick.services.desc': 'Önkormányzati szolgáltatások',
    'quick.about': 'Bemutatkozás',
    'quick.about.desc': 'Gárdony város bemutatása',
    'quick.beaches': 'Strandok',
    'quick.beaches.desc': 'Velencei-tó strandjai',
    'quick.accommodation': 'Vendéglátás',
    'quick.accommodation.desc': 'Hotelek és éttermek',
    'quick.contact': 'Kapcsolat',
    'quick.contact.desc': 'Elérhetőségek és ügyfélfogadás',
    
    // Office Hours
    'office.title': 'Ügyfélfogadási idő',
    'office.hours': 'Hétfő: 8:00-12:00, 13:00-17:30 | Szerda: 8:00-12:00 | Péntek: 8:00-12:00',
    
    // News
    'news.title': 'Legfrissebb hírek',
    'news.subtitle': 'Aktuális információk és közlemények',
    'news.viewAll': 'Összes hír',
    'news.readMore': 'Tovább',
    
    // About City
    'city.title': 'Gárdony Város',
    'city.text1': 'Gárdony Magyarország Közép-Dunántúl régiójában, a Velencei-tó déli partján helyezkedik el, Budapesttől mindössze 50 kilométerre.',
    'city.text2': 'A város három fő településrészből áll: a központi Gárdonyból, a tóparti Agárdból és a természetközeli Dinnyésből. 1989-ben kapta meg a városi rangot.',
    'city.text3': 'A Velencei-tó és környéke kiváló lehetőséget kínál a pihenésre, fürdőzésre és vízi sportokra. A város híres a 58°C-os termálvízéről és gazdag természeti értékeiről.',
    'city.details': 'Részletek',
    'city.population': 'Lakosság',
    'city.cityStatus': 'Városi rang',
    'city.fromBudapest': 'Budapesttől',
    'city.lakeArea': 'Velencei-tó',
    
    // Tourism
    'tourism.title': 'Turizmus és szabadidő',
    'tourism.subtitle': 'Fedezze fel a Velencei-tó természeti kincseit és Gárdony nevezetességeit',
    'tourism.lake': 'Velencei-tó',
    'tourism.lake.desc': '26 km² tiszta víz, fürdőzés és vízisportok',
    'tourism.thermal': 'Termálfürdő',
    'tourism.thermal.desc': '58°C gyógyvíz, wellness és relaxáció',
    'tourism.nature': 'Természetvédelem',
    'tourism.nature.desc': 'Védett nádasok és madárvilág',
    'tourism.memorial': 'Emlékház',
    'tourism.memorial.desc': 'Gárdonyi Géza emlékház és múzeum',
    'tourism.more': 'További információk',
    
    // Contact
    'contact.title': 'Kapcsolat',
    'contact.address': 'Cím',
    'contact.address.full': '2483 Gárdony, Szabadság út 20-22',
    'contact.phone': 'Telefon',
    'contact.email': 'Email',
    
    // Footer
    'footer.about': 'Rólunk',
    'footer.about.text': 'Gárdony város hivatalos honlapja - információk és szolgáltatások a helyi közösség számára.',
    'footer.office.hours': 'Ügyfélfogadás',
    'footer.office.monday': 'Hétfő: 8:00-12:00, 13:00-17:30',
    'footer.office.wednesday': 'Szerda: 8:00-12:00',
    'footer.office.friday': 'Péntek: 8:00-12:00',
    'footer.copyright': '© 2025 Gárdony Város Önkormányzata. Minden jog fenntartva.',
    'footer.privacy': 'Adatvédelem',
    'footer.imprint': 'Impresszum',
    'footer.help': 'Súgó',
    'footer.accessibility': 'Akadálymentesítés',
  },
  en: {
    // Header & Navigation
    'site.title': 'City of Gárdony',
    'site.subtitle': 'Municipality',
    'nav.home': 'Home',
    'nav.about': 'About',
    'nav.news': 'News',
    'nav.documents': 'Documents',
    'nav.tourism': 'Tourism',
    'nav.services': 'Services',
    'nav.contact': 'Contact',
    
    // Search
    'search.placeholder': 'Search...',
    'search.button': 'Search',
    
    // Homepage
    'home.welcome': 'Welcome to the Official Website of Gárdony',
    'home.subtitle': 'A city on the shores of Lake Velence, 50 km from Budapest, where natural beauty meets modern urban life',
    'home.cta.contact': 'Contact Us',
    'home.cta.services': 'Services',
    
    // Mayor's Message
    'mayor.title': "Mayor's Welcome",
    'mayor.name': 'József Hajdu',
    'mayor.position': 'Mayor',
    'mayor.message': 'Dear Visitors! I warmly welcome you to the official website of Gárdony. Our city is located on the beautiful shores of Lake Velence, where natural beauty and the advantages of urban life blend harmoniously. Gárdony is a dynamically developing settlement, proud of its history, cultural heritage, and hospitality. On our website, you will find information about our city life, services, and tourism opportunities. Enjoy browsing!',
    
    // Quick Access
    'quick.title': 'Quick Access',
    'quick.subtitle': 'The most important services and information at one click',
    'quick.news': 'News',
    'quick.news.desc': 'Current news and announcements',
    'quick.documents': 'Documents',
    'quick.documents.desc': 'Forms and official documents',
    'quick.tourism': 'Tourism',
    'quick.tourism.desc': 'Attractions and programs',
    'quick.services': 'Services',
    'quick.services.desc': 'Municipal services',
    'quick.about': 'About',
    'quick.about.desc': 'Introduction to Gárdony',
    'quick.beaches': 'Beaches',
    'quick.beaches.desc': 'Lake Velence beaches',
    'quick.accommodation': 'Accommodation & Dining',
    'quick.accommodation.desc': 'Hotels and restaurants',
    'quick.contact': 'Contact',
    'quick.contact.desc': 'Contact information and office hours',
    
    // Office Hours
    'office.title': 'Office Hours',
    'office.hours': 'Monday: 8:00-12:00, 13:00-17:30 | Wednesday: 8:00-12:00 | Friday: 8:00-12:00',
    
    // News
    'news.title': 'Latest News',
    'news.subtitle': 'Current information and announcements',
    'news.viewAll': 'All News',
    'news.readMore': 'Read More',
    
    // About City
    'city.title': 'City of Gárdony',
    'city.text1': 'Gárdony is located in the Central Transdanubia region of Hungary, on the southern shore of Lake Velence, just 50 kilometers from Budapest.',
    'city.text2': 'The city consists of three main districts: central Gárdony, lakeside Agárd, and natural Dinnyés. It received city status in 1989.',
    'city.text3': 'Lake Velence and its surroundings offer excellent opportunities for relaxation, swimming, and water sports. The city is famous for its 58°C thermal water and rich natural treasures.',
    'city.details': 'Details',
    'city.population': 'Population',
    'city.cityStatus': 'City Status',
    'city.fromBudapest': 'From Budapest',
    'city.lakeArea': 'Lake Velence',
    
    // Tourism
    'tourism.title': 'Tourism & Leisure',
    'tourism.subtitle': 'Discover the natural treasures of Lake Velence and Gárdony attractions',
    'tourism.lake': 'Lake Velence',
    'tourism.lake.desc': '26 km² of clean water, swimming and water sports',
    'tourism.thermal': 'Thermal Bath',
    'tourism.thermal.desc': '58°C healing water, wellness and relaxation',
    'tourism.nature': 'Nature Conservation',
    'tourism.nature.desc': 'Protected reed beds and birdlife',
    'tourism.memorial': 'Memorial House',
    'tourism.memorial.desc': 'Gárdonyi Géza memorial house and museum',
    'tourism.more': 'More Information',
    
    // Contact
    'contact.title': 'Contact',
    'contact.address': 'Address',
    'contact.address.full': '2483 Gárdony, Szabadság út 20-22, Hungary',
    'contact.phone': 'Phone',
    'contact.email': 'Email',
    
    // Footer
    'footer.about': 'About Us',
    'footer.about.text': 'Official website of the City of Gárdony - information and services for the local community.',
    'footer.office.hours': 'Office Hours',
    'footer.office.monday': 'Monday: 8:00-12:00, 13:00-17:30',
    'footer.office.wednesday': 'Wednesday: 8:00-12:00',
    'footer.office.friday': 'Friday: 8:00-12:00',
    'footer.copyright': '© 2025 Municipality of Gárdony. All rights reserved.',
    'footer.privacy': 'Privacy Policy',
    'footer.imprint': 'Imprint',
    'footer.help': 'Help',
    'footer.accessibility': 'Accessibility',
  },
  de: {
    // Header & Navigation
    'site.title': 'Stadt Gárdony',
    'site.subtitle': 'Gemeinde',
    'nav.home': 'Startseite',
    'nav.about': 'Über uns',
    'nav.news': 'Nachrichten',
    'nav.documents': 'Dokumente',
    'nav.tourism': 'Tourismus',
    'nav.services': 'Dienstleistungen',
    'nav.contact': 'Kontakt',
    
    // Search
    'search.placeholder': 'Suchen...',
    'search.button': 'Suchen',
    
    // Homepage
    'home.welcome': 'Willkommen auf der offiziellen Website von Gárdony',
    'home.subtitle': 'Eine Stadt am Ufer des Velence-Sees, 50 km von Budapest entfernt, wo natürliche Schönheit auf modernes Stadtleben trifft',
    'home.cta.contact': 'Kontakt aufnehmen',
    'home.cta.services': 'Dienstleistungen',
    
    // Mayor's Message
    'mayor.title': 'Begrüßung des Bürgermeisters',
    'mayor.name': 'József Hajdu',
    'mayor.position': 'Bürgermeister',
    'mayor.message': 'Sehr geehrte Besucher! Ich heiße Sie herzlich auf der offiziellen Website von Gárdony willkommen. Unsere Stadt liegt am schönen Ufer des Velence-Sees, wo natürliche Schönheit und die Vorteile des städtischen Lebens harmonisch verschmelzen. Gárdony ist eine dynamisch wachsende Gemeinde, stolz auf ihre Geschichte, ihr kulturelles Erbe und ihre Gastfreundschaft. Auf unserer Website finden Sie Informationen über unser Stadtleben, Dienstleistungen und touristische Möglichkeiten. Viel Spaß beim Stöbern!',
    
    // Quick Access
    'quick.title': 'Schnellzugriff',
    'quick.subtitle': 'Die wichtigsten Dienste und Informationen mit einem Klick',
    'quick.news': 'Nachrichten',
    'quick.news.desc': 'Aktuelle Nachrichten und Ankündigungen',
    'quick.documents': 'Dokumente',
    'quick.documents.desc': 'Formulare und offizielle Dokumente',
    'quick.tourism': 'Tourismus',
    'quick.tourism.desc': 'Sehenswürdigkeiten und Programme',
    'quick.services': 'Dienstleistungen',
    'quick.services.desc': 'Gemeindedienstleistungen',
    'quick.about': 'Über uns',
    'quick.about.desc': 'Vorstellung von Gárdony',
    'quick.beaches': 'Strände',
    'quick.beaches.desc': 'Velence-See Strände',
    'quick.accommodation': 'Unterkunft & Gastronomie',
    'quick.accommodation.desc': 'Hotels und Restaurants',
    'quick.contact': 'Kontakt',
    'quick.contact.desc': 'Kontaktinformationen und Öffnungszeiten',
    
    // Office Hours
    'office.title': 'Öffnungszeiten',
    'office.hours': 'Montag: 8:00-12:00, 13:00-17:30 | Mittwoch: 8:00-12:00 | Freitag: 8:00-12:00',
    
    // News
    'news.title': 'Neueste Nachrichten',
    'news.subtitle': 'Aktuelle Informationen und Ankündigungen',
    'news.viewAll': 'Alle Nachrichten',
    'news.readMore': 'Weiterlesen',
    
    // About City
    'city.title': 'Stadt Gárdony',
    'city.text1': 'Gárdony liegt in der Region Mitteltransdanubien in Ungarn, am südlichen Ufer des Velence-Sees, nur 50 Kilometer von Budapest entfernt.',
    'city.text2': 'Die Stadt besteht aus drei Hauptteilen: dem zentralen Gárdony, dem am See gelegenen Agárd und dem naturnahen Dinnyés. Sie erhielt 1989 den Stadtstatus.',
    'city.text3': 'Der Velence-See und seine Umgebung bieten ausgezeichnete Möglichkeiten zur Erholung, zum Baden und für Wassersport. Die Stadt ist berühmt für ihr 58°C warmes Thermalwasser und ihre reichen Naturschätze.',
    'city.details': 'Details',
    'city.population': 'Bevölkerung',
    'city.cityStatus': 'Stadtstatus',
    'city.fromBudapest': 'Von Budapest',
    'city.lakeArea': 'Velence-See',
    
    // Tourism
    'tourism.title': 'Tourismus & Freizeit',
    'tourism.subtitle': 'Entdecken Sie die Naturschätze des Velence-Sees und die Sehenswürdigkeiten von Gárdony',
    'tourism.lake': 'Velence-See',
    'tourism.lake.desc': '26 km² sauberes Wasser, Baden und Wassersport',
    'tourism.thermal': 'Thermalbad',
    'tourism.thermal.desc': '58°C Heilwasser, Wellness und Entspannung',
    'tourism.nature': 'Naturschutz',
    'tourism.nature.desc': 'Geschützte Schilfgebiete und Vogelwelt',
    'tourism.memorial': 'Gedenkhaus',
    'tourism.memorial.desc': 'Gárdonyi Géza Gedenkhaus und Museum',
    'tourism.more': 'Weitere Informationen',
    
    // Contact
    'contact.title': 'Kontakt',
    'contact.address': 'Adresse',
    'contact.address.full': '2483 Gárdony, Szabadság út 20-22, Ungarn',
    'contact.phone': 'Telefon',
    'contact.email': 'E-Mail',
    
    // Footer
    'footer.about': 'Über uns',
    'footer.about.text': 'Offizielle Website der Stadt Gárdony - Informationen und Dienstleistungen für die lokale Gemeinschaft.',
    'footer.office.hours': 'Öffnungszeiten',
    'footer.office.monday': 'Montag: 8:00-12:00, 13:00-17:30',
    'footer.office.wednesday': 'Mittwoch: 8:00-12:00',
    'footer.office.friday': 'Freitag: 8:00-12:00',
    'footer.copyright': '© 2025 Gemeinde Gárdony. Alle Rechte vorbehalten.',
    'footer.privacy': 'Datenschutz',
    'footer.imprint': 'Impressum',
    'footer.help': 'Hilfe',
    'footer.accessibility': 'Barrierefreiheit',
  }
}

export function translate(key: string, lang: Language): string {
  return (translations[lang] as Record<string, string>)[key] || key
}
