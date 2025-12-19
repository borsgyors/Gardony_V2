export default function ImpresszumPage() {
  return (
    <div className="min-h-screen bg-white">
      <section className="py-16">
        <div className="container max-w-4xl space-y-6">
          <h1 className="text-4xl font-bold text-[#1A4D6B]">Impresszum</h1>
          <div className="space-y-3 text-lg text-[#334155]">
            <p><strong>Üzemeltető:</strong> Gárdony Város Önkormányzata</p>
            <p><strong>Székhely:</strong> 2483 Gárdony, Szabadság út 20-22.</p>
            <p><strong>Kapcsolat:</strong> onkormanyzat@gardony.hu, telefon: +36 (22) 570-100/224, +36 (22) 570-136</p>
            <p><strong>Honlap:</strong> www.gardony.hu</p>
          </div>
          <div className="bg-yellow-50 border border-yellow-300 rounded-lg p-6 text-yellow-900 space-y-2">
            <p><strong>Pótlás alatt:</strong> felelős szerkesztő, technikai üzemeltető, adószám, cégjegyzékszám/nyilvántartási szám.</p>
          </div>
        </div>
      </section>
    </div>
  )
}
