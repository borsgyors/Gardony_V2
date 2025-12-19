export default function PanaszkezelesPage() {
  return (
    <div className="min-h-screen bg-white">
      <section className="py-16">
        <div className="container max-w-4xl space-y-8">
          <h1 className="text-4xl font-bold text-[#1A4D6B]">Panaszkezelési rend</h1>
          <p className="text-lg text-[#334155]">
            A részletes panaszkezelési rend jelenleg nem áll rendelkezésre. A hivatalos eljárásrend közzététele folyamatban; addig az általános ügyfélfogadási elérhetőségeken lehet panaszt benyújtani.
          </p>
          <div className="bg-yellow-50 border border-yellow-300 rounded-lg p-6 text-yellow-900">
            <strong>Pótlás alatt</strong>: határidők, panaszkezelési felelős, jogorvoslati lehetőségek.
          </div>
        </div>
      </section>
    </div>
  )
}
